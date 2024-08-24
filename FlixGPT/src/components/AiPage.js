import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../utils/langConstrants';
import gemini from '../utils/gemini';
import { API_OPTION, GET_MOVIE_BY_NAME_API } from '../utils/constrants';
import { updateSearchResult } from '../utils/gptSlice';
import MovieList from "./MovieList";
import LoadingPage from './LoadingPage';

const AiPage = () => {
    const langKey = useSelector(store => store.config.lang);
    const { searchResult, gptMovies } = useSelector(store => store.gpt);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const getMovieFromTMDB = async (movie) => {
        const data = await fetch(GET_MOVIE_BY_NAME_API + movie, API_OPTION);
        const json = await data.json();
        return json.results;
    }

    const handleGeminiSearchClick = async () => {
        setIsLoading(true);
        const prompt = "Act as a  Movie Recommendation system and suggest some movies for the query " + searchText.current.value + ". Only give me name of 3 movies, comma seperated like the example result given ahead. Example result : Movie Name 1, Movie Name 2, Move Name 3";

        const result = await gemini.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const movieNameArray = text.split(", ");
        const promiseArray = movieNameArray.map(movie => getMovieFromTMDB(movie));
        const movieListArray = await Promise.all(promiseArray);
        dispatch(updateSearchResult({ movieName: movieNameArray, movieList: movieListArray }));
        setIsLoading(false);
    }

    return (
        <div className='pt-20 flex justify-center items-center bg-darkBlue h-screen w-screen text-white'>
            <div className='flex flex-col-reverse items-center justify-start gap-8 p-2 overflow-hidden h-5/6 w-2/3'>
                <form onSubmit={e => e.preventDefault()} className='flex justify-center gap-4 w-full'>
                    <input type='text' ref={searchText} placeholder={lang[langKey].gptInputPlaceholder} className='bg-black py-2 px-4 rounded-lg w-1/2 ' />
                    <button className='px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg' onClick={handleGeminiSearchClick}><i className="fa-solid fa-paper-plane"></i></button>
                </form>
                <div className='overflow-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-700 w-full'>
                    <div className='p-4'>
                        {gptMovies && gptMovies.map((movie, index) => <MovieList key={index} title={searchResult[index]} movies={movie} />)}
                    </div>
                    {isLoading && <LoadingPage/>}
                </div>
            </div>
        </div>
    )
}

export default AiPage;