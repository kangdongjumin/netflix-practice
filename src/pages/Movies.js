import React, { useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch } from "react-redux";
import MovieCardForPopular from "../component/MovieCardForPopular";
import PaginationForMovies from "../component/PaginationForMovies";


const Movies = () => {
  const id = 1010581;
  const pageNum = 1
  const searchInput = ""
  const { popularMovies, movieSearch } = useSelector((state) => state.movie);
  console.log("인기영화", popularMovies, movieSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMovies({ id, pageNum, searchInput }));
  }, []);

  return (
    <Container className="movie-detail" style={{ backgroundColor: "black" }}>
      <Row>
        <Col className="movie-function-two-button" lg={4}>
          <div>
            <Button className="Movies-function-button" variant="outline-light">
              Sort
            </Button>
          </div>
          <div>
            <Button className="Movies-function-button" variant="outline-light">
              Filter
            </Button>
          </div>
        </Col>
        <Col className="movies-poster-section" lg={8}>
          <Row>
          {popularMovies.results?.map((popularMovies)=>(
        <Col className="movies-popular-poster" lg={6}><MovieCardForPopular item={popularMovies}  /></Col>)
        )}
        </Row>
          <div>
          <PaginationForMovies popularMovies={popularMovies}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
