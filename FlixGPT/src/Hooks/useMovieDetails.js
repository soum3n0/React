import { useEffect, useState } from "react";
import { API_OPTION, GET_MOVIE_BY_ID } from "../utils/constrants";

const useMovieDetails = (id) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const getMovieDetails = async ()=>{
        const data = await fetch(GET_MOVIE_BY_ID + id, API_OPTION);
        const json = await data.json();
        setMovieDetails(json);
    }
    useEffect(()=>{
        getMovieDetails();
    }, []);
    return movieDetails;
}

export default useMovieDetails;