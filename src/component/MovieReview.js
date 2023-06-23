import React from 'react'
import { useSelector } from "react-redux";


const MovieReview = ( {id} ) => {
    const {movieReview} = useSelector((state)=> state.movie)
  
  return (
    <div className="movie-review">
      {movieReview?.results?.map((i)=>(
      <div><div className="movie-review-author">{i.author}</div>
      <div className="movie-review-content"> {i.content}
        </div></div>
      ))}

    </div>
  )
}

export default MovieReview
