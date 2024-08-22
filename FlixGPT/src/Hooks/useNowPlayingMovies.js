import { useEffect } from "react";
import { API_OPTION, NOW_PLAYING_MOVIE_API } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
        const data = await fetch(NOW_PLAYING_MOVIE_API, API_OPTION);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;