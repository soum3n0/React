import React from 'react';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptPage from './GptPage';

const Browse = () => {
    useNowPlayingMovies();
    const gptPageStatus = useSelector(store => store.gpt.gptPage);

    return (
        <div>
            {gptPageStatus ? <GptPage /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>}
        </div>
    )
}

export default Browse;