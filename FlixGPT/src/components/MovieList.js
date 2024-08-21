import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    if (!Array.isArray(movies) || movies.length === 0) return;

    return (
        <div className='text-white p-6'>
            <div className='text-3xl font-bold p-4'>{title}</div>
            <div className='flex overflow-x-scroll scrollbar-none '>
                <div className='flex gap-5'>
                    {movies?.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;