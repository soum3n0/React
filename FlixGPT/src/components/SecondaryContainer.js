import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    if (!movies.nowPlayingMovies || movies.nowPlayingMovies.length === 0) return;
    return (
        <div className='bg-black w-screen'>
            <div className='relative -mt-60'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;