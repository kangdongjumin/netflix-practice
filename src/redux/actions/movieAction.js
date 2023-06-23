import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies({ id, pageNum, searchInput }) {
  console.log("페이지",pageNum, id, searchInput)
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`
      );
  
      const topRateApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en`
      );

      const detailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      const reviewApi = api.get(
        `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        )

      const relatedMoviesApi = api.get (
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      )

      const movieTrailerApi = api.get (
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )

      const movieSearchApi = api.get (
        `/search/movie?api_key=${API_KEY}&query=${searchInput}&include_adult=false&language=en-US`)

      let [
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        genreList,
        movieDetail,
        movieReview,
        relatedMovies,
        movieTrailer,
        movieSearch,

      ] = await Promise.all([
        popularMovieApi,
        topRateApi,
        upComingApi,
        genreApi,
        detailApi,
        reviewApi,
        relatedMoviesApi,
        movieTrailerApi,
        movieSearchApi,
      ]);
  
      // console.log("장르", genreList);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
          movieDetail: movieDetail.data,
          movieReview: movieReview.data,
          relatedMovies: relatedMovies.data,
          movieTrailer: movieTrailer.data,
          movieSearch: movieSearch.data,
        },
      });
      
    } catch (error) {
      // 에러 핸들링하는곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
};
