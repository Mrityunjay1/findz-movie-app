import React, { useEffect } from 'react'
import MovieList from './MovieList'
import movieapi from '../common/api/movieapi'
import {APIKey} from '../common/api/MovieApiKey'

function Home() {

    useEffect(() => {
        const fetchMovies= async () => {
            const response = await movieapi.get(`trending/movie/week?api_key=${APIKey}`)
            .catch(error => console.log(error));
            console.log(response);
        }
        fetchMovies();
    },[])
    return (
        <div>
            <MovieList />
        </div>
    )
}

export default Home
