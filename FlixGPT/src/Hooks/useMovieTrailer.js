import { useEffect } from "react";
import { API_OPTION, MOVIE_VIDEO_API } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch();
    const getMovieTrailer =async ()=>{
        const data = await fetch(MOVIE_VIDEO_API+id+"/videos", API_OPTION);
        const json = await data.json();
        const filteredVideo = json.results.filter(video => video?.type === "Trailer");
        const trailer = filteredVideo.length ? filteredVideo[0] : json?.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMovieTrailer();
    }, []);
}

export default useMovieTrailer;