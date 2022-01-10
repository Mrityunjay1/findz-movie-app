import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
      height: 350,
    },
    div: {
        textDecoration: 'none',
    }
  });

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  cursor: pointer;
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
function MovieCard({data}) {
    const classes = useStyles();
    return (
        <div className={classes.div} >
            <a href={`/movie/${data.imdbID}`} >
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.Poster}
          title={data.title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{data.Title}</Typography>
        <MovieContainer>
        <InfoColumn>
        <MovieInfo>Year : {data.Year}</MovieInfo>
        <MovieInfo>Type : {data.Type}</MovieInfo>
      </InfoColumn>
        </MovieContainer>
        
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
            
        </div>
    )
}

export default MovieCard
