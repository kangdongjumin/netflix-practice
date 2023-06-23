import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import {
  Row,
  Col,
  Badge,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import MovieReview from "../component/MovieReview";
import RelatedMovies from "../component/RelatedMovies";
import WatchTrailer from "../component/WatchTrailer";
import { useState } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const pageNum = 1;
  const searchInput = "";

  // console.log("ID",id)
  const dispatch = useDispatch();
  const [buttonOn, setButtonOn] = useState(true);
  const [show, setShow] = useState(false);
  const { movieDetail } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies({ id, pageNum, searchInput }));
  }, [id]);
  // console.log("무비디테일", movieDetail)

  return (
    <Container>
      <Row className="movie-detail" style={{ backgroundColor: "black" }}>
        <Col className="movie-detail-description">
          <div
            className="movie-detail-poster"
            style={{
              backgroundImage:
                "URL(" +
                `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieDetail?.poster_path}` +
                ")",
            }}
          ></div>
        </Col>
        <Col className="movie-detail-description">
          <div>
            {movieDetail?.genres.map((i) => (
              <Badge className="movie-detail-genres" bg="danger">
                {i.name}
              </Badge>
            ))}
          </div>
          <div className="movie-detail-title">{movieDetail?.title}</div>
          <div className="movie-detail-etc-1">
            <div>
              <img
                className="movie-detail-rating-star"
                width={20}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3jle1HGAIJofRgOSH1LDVQRy5y1aO6TSGg&usqp=CAU"
              ></img>
              {movieDetail?.vote_average?.toFixed(1)}
            </div>
            <div>
              <img
                className="movie-detail-rating-star"
                width={20}
                src="https://cdn-icons-png.flaticon.com/512/2636/2636869.png"
              ></img>
              {movieDetail?.popularity}
            </div>
            <div className="movie-detail-adult">
              {movieDetail?.adult ? "청불" : "Under 18"}
            </div>
          </div>
          <div className="movie-detail-overview">{movieDetail?.overview}</div>
          <div className="movie-detail-etc-2">
            <div>
              <Badge className="movie-detail-info" bg="danger">
                BUDGET
              </Badge>
              $ {movieDetail?.budget}
            </div>
            <div>
              <Badge className="movie-detail-info" bg="danger">
                REVENUE
              </Badge>
              $ {movieDetail?.revenue}
            </div>
            <div>
              <Badge className="movie-detail-info" bg="danger">
                RELEASE DAY
              </Badge>
              {movieDetail?.release_date}
            </div>
            <div>
              <Badge className="movie-detail-info" bg="danger">
                TIME
              </Badge>
              {movieDetail?.runtime} MIN
            </div>
          </div>
          <div onClick={() => setShow(true)} className="movie-detail-trailer">
            <img
              width={250}
              src="https://about.hearo.live/sites/default/files/WATCH%20TRAILER%20BUTTON2.png"
            ></img>
          </div>

          <WatchTrailer show={show} setShow={setShow} />
        </Col>
      </Row>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton
          onClick={() => setButtonOn(true)}
          className="movie-detail-button"
          variant="outline-danger"
          id="tbg-radio-1"
          value={1}
        >
          Review
        </ToggleButton>
        <ToggleButton
          onClick={() => setButtonOn(false)}
          className="movie-detail-button"
          variant="outline-danger"
          id="tbg-radio-2"
          value={2}
        >
          Related Movies
        </ToggleButton>
      </ToggleButtonGroup>
      <div>
        {buttonOn ? <MovieReview id={id} /> : <RelatedMovies id={id} />}
      </div>
    </Container>
  );
};

export default MovieDetail;
