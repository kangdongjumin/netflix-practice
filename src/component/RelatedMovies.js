import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import MovieCard from './MovieCard'

const RelatedMovies = ({id}) => {
    const {relatedMovies} = useSelector((state)=> state.movie)
    console.log("관련영화",id,relatedMovies)
  return (
      <Container>
        <Row>  
        {relatedMovies?.results.map((relatedMovies)=>(
        <Col className="related-movies-poster" lg={4}><MovieCard item={relatedMovies}/></Col>)
        )}
        </Row>
      </Container>
  )
}

export default RelatedMovies
