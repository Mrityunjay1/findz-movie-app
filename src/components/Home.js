import React, { useEffect } from "react";
import MovieList from "./MovieList";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
} from "../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const movieText="Harry"
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default Home;