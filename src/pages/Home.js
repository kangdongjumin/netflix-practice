import React from "react";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
  const dispatch = useDispatch();
  const id =1010581;
  const pageNum=1;
  const searchInput = "";
  const  { popularMovies,
  topRatedMovies,
  upcomingMovies,
  loading,} 
  = useSelector(state => state.movie)
  // console.log("home", popularMovies)
  useEffect(() => {
    dispatch(movieAction.getMovies({id, pageNum, searchInput}))
  }, []);

  // loading true : loading 스피너 보여주고
  // false : 데이터를 보여주고
  // true : 데이터 도착 전
  // false : 데이터 도착 후 or 에러가 났을 때
  if (loading) {
    return  <ClipLoader
    color="red"
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  } 
  return (
    <div style={{backgroundColor:"black"}}>
    {<Banner movie={popularMovies.results[0]} />}
  
    <h1 className="text-color">Popular Movie</h1>
    <MovieSlide movies={popularMovies}/>
    <h1 className="text-color">Top rated Movie</h1>
    <MovieSlide movies={topRatedMovies} />

    <h1 className="text-color">Upcoming Movie</h1>
    <MovieSlide movies={upcomingMovies}/>

  </div>
)};



export default Home;
