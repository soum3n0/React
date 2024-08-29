import React, { useMemo } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    const mainMovie = useMemo(() => {
        if (!movies || movies.length === 0) return null;
        const index = Math.floor(Math.random() * movies.length);
        return movies[index];
    }, [movies]);
    
 
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