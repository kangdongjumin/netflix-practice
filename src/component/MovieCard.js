import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
    const {genreList} = useSelector((state)=> state.movie)
    const navigate = useNavigate()
    const goToMovieDetail=(movieID)=> {
        movieID=item.id
        navigate(`/movies/${movieID}`)
    }

    return (
    <div
      className="slide-card"
      style={{ width:"300px", height:"200px",
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div onClick={(movieID)=>goToMovieDetail(movieID)} className="overlay">
        <h1 className="text-color">{item.title}</h1>
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

export default MovieCard;
