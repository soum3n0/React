import { useEffect, useState } from "react";
import { API_OPTION, MOVIE_VIDEO_API } from "../utils/constrants";

const useMovieTrailer = (id)=>{
    const [trailerDetails, setTrailerDetails] = useState(null);
    const getMovieTrailer =async ()=>{
        const data = await fetch(MOVIE_VIDEO_API+id+"/videos", API_OPTION);
        const json = await data.json();
        const filteredVideo = json.results.filter(video => video?.type === "Trailer");
        const trailer = filteredVideo.length ? filteredVideo[0] : json?.results[0];
        setTrailerDetails(trailer);
    } 
    useEffect(()=>{
        getMovieTrailer();
    }, []);
    return trailerDetails;
}

export default useMovieTrailer;