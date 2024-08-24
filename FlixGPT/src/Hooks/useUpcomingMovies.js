import { useEffect } from "react"
import { API_OPTION, UPCOMING_MOVIE_API } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies = async ()=>{
        const data = await fetch(UPCOMING_MOVIE_API, API_OPTION);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
}

export default useUpcomingMovies;