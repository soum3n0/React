import { useEffect } from "react"
import { API_OPTION, POPULAR_MOVIE_API } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies = async ()=>{
        const data = await fetch(POPULAR_MOVIE_API, API_OPTION);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;