import { useEffect } from "react"
import { API_OPTION, TOP_RATED_MOVIE_API } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        getMovies();
    }, []);

    const getMovies = async () =>{
        const data = await fetch(TOP_RATED_MOVIE_API, API_OPTION);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;