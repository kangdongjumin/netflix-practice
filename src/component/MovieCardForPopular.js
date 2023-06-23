import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCardForPopular = ({item }) => {
    const {genreList} = useSelector((state)=> state.movie)
    const navigate = useNavigate()
    const goToMovieDetail=(movieID)=> {
        movieID=item.id
        navigate(`/movies/${movieID}`)
    }
  

    return (
    <div
      className="movie-card-for-popular"
      style={{ width:"300px", height:"500px",
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}` +
          ")",
      }}
    >
      <div  className="movie-card-info" onClick={(movieID)=>goToMovieDetail(movieID)}>
        <h1 className="movie-card-info-title">{item.title}</h1>
        <h1 className="movie-card-info-overview">{item.overview?.length > 100? item.overview.substr(0,200) +"...":item.overview}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge className="card-margin" bg="danger">{(genreList.find(item=>item.id==id).name)}</Badge>
          ))}
        </div>
        <div className="text-color">
            <span className="card-margin">{item.vote_average}</span>
            <span>{item.adult?"청불":"Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCardForPopular
