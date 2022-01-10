import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
function MovieCard({movie}) {
    return (
        <div>
            <Link to={`/movie/${movie.imdbID}`}>
            <MovieContainer>
                <CoverImage src={movie.Poster} alt={movie.Title} />
                <MovieName>{movie.Title}</MovieName>
                <InfoColumn>
            <MovieInfo>Year : {movie.Year}</MovieInfo>
            <MovieInfo>Type : {movie.Type}</MovieInfo>
            </InfoColumn>
        </MovieContainer>
            </Link>
            
        </div>
    )
}

export default MovieCard
