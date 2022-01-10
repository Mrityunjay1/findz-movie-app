import React from 'react'
import {useSelector} from 'react-redux'
import { getAllMovies } from '../features/movies/movieSlice'
import MovieCard from './MovieCard'
import styled from "styled-components";

const Container = styled.div`
 display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

function MovieList() {
    const movies = useSelector(getAllMovies);
    let renderMovies="";

    renderMovies= movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <div className="movies-error">
          <h3>{movies.Error}</h3>
        </div>
      );
    return (
        <div>
        <h2>Movies</h2>
        <Container>
            {renderMovies}
        </Container>
        
        </div>
    )
}

export default MovieList
