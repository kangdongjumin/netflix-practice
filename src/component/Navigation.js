import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = 1010581;
  const pageNum = 1;
  const { movieSearch } = useSelector((state) => state.movie);
  console.log("검색", movieSearch, searchInput);
  const searchByKeyword = (event) => {
    event.preventDefault();
    dispatch(movieAction.getMovies({ id, pageNum, searchInput }));
    navigate("/movies");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            width={100}
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-item" to="/">
              Home
            </Link>
            <Link className="nav-item" to="/movies">
              Movies
            </Link>
          </Nav>
          <Form onSubmit={searchByKeyword} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                if (event.key === "Enter") {
                  setSearchInput(event.target.value);
                }
              }}
            />
            <Button type="submit" variant="outline-danger">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
