import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 0 && window.scrollY <= 600)
                setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!movies.nowPlayingMovies || movies.nowPlayingMovies.length === 0) return;

    // Calculate background color based on scroll position
    const backgroundColor = `rgba(0, 0, 0, ${Math.min(scrollY / 600, 1)})`;

    return (
        <div className='w-screen relative z-10' style={{ backgroundColor }}>
            <div className='relative -mt-24'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;