let initialState = {
    popularMovies:{},
    topRatedMovies:{},
    upcomingMovies:{},
    loading:true,
    genreLIst:{},
    movieReview:{},
    relatedMovies:{},
    movieTrailer:{},
    movieSearch:{},

}

function movieReducer (state=initialState, action) {
    let {type,payload} = action

    switch (type) {
        case "GET_MOVIES_REQUEST":
            return {...state,loading:true}

        case "GET_MOVIES_SUCCESS":
            return {...state, 
                popularMovies: payload.popularMovies,
                 topRatedMovies:payload.topRatedMovies,
                  upcomingMovies: payload.upcomingMovies,
                genreList:payload.genreList,
                movieDetail:payload.movieDetail,
                movieReview:payload.movieReview,
                relatedMovies:payload.relatedMovies,
                movieTrailer:payload.movieTrailer,
                movieSearch:payload.movieSearch,
                loading:false }


        case "GET_MOVIES_FAILURE":
            return {...state, loading:false }
    
                  default :
    return {...state}
    }
}

export default movieReducer