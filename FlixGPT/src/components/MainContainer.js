import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // Early return
    if (!movies) return;

    // const min = 0;
    // const max = movies.length;
    // const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    const mainMovie = movies[1];
    if (!mainMovie) return;
    const { id, original_title, overview } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} description={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer;