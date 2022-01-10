import React, { useEffect } from "react";
import MovieList from "./MovieList";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
} from "../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default Home;