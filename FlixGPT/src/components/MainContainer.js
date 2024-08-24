import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // Early return
    if (!movies) return;

    const index = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[index];
    if (!mainMovie) return;
    const { id, original_title, overview } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} description={overview} id={id}/>
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer;