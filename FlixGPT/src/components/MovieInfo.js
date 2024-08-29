import useMovieDetails from "../Hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import { IMDB_LINK, POSTER_URL } from "../utils/constrants";
import { useEffect, useState } from "react";
import { Circle } from 'rc-progress';
import useMovieTrailer from "../Hooks/useMovieTrailer";
import LoadingPage from "./LoadingPage";

const MovieInfo = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [trailerPage, setTrailerPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const trailerDetails = useMovieTrailer(movieId);
    const details = useMovieDetails(movieId);

    useEffect(() => {
        setMovieDetails(details);
    }, [details]);

    if (!movieDetails) return <LoadingPage/>;

    function convertRuntime(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        if (!hours) {
            return `${minutes}min`;
        } else if (!minutes) {
            return `${hours}hr`;
        }
        return `${hours}hr ${minutes}min`;
    }

    function language(lang) {
        if (lang === "en") {
            return "English";
        } else if (lang === "hi") {
            return "Hindi";
        } else if (lang === "bn") {
            return "Bengali";
        } else {
            return "Unknown";
        }
    }

    const handleIframeLoad = () => {
        setLoading(false);
    };

    const handleTrailerClick = () => { 
        setTrailerPage(true);
        setLoading(true);
    }

    const { poster_path, budget, revenue, genres, homepage, original_title, release_date, runtime, tagline, overview, vote_average, status, imdb_id, original_language } = movieDetails;
    return (
        <div className="bg-darkBlue grid grid-flow-col grid-cols-4 pt-24 p-8 h-screen">
            <img className="rounded-xl" src={POSTER_URL + poster_path} alt={original_title} />
            <section className="text-white px-8 col-span-3 flex flex-col gap-8">
                <div className="flex justify-between">
                    <div>
                        <span className="text-4xl font-bold">{original_title} </span>
                        <span className="text-4xl text-gray-400">({release_date.split("-")[0]})</span>
                        <h4>{release_date.split("-").join("/")} - {genres.map(genre => genre.name).join(', ')} - {convertRuntime(runtime)}</h4>
                    </div>
                    <div className="flex gap-6 items-center">
                        <a href={IMDB_LINK + imdb_id}><i title="Visit IMDb" className="fa-brands fa-imdb text-5xl hover:text-gray-400"></i></a>
                        <a href={homepage}><i title="Visit official website" className="fa-solid fa-arrow-up-right-from-square text-xl hover:text-gray-400"></i></a>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="relative">
                        <Circle className="h-14" percent={vote_average / 10 * 100} strokeWidth={8} strokeColor="#D3D3D3" />
                        <span title="Rating" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{vote_average.toFixed(1)}</span>
                    </div>
                    <button onClick={handleTrailerClick} className="hover:text-gray-400 hover:border-gray-400 border border-white px-4 my-2 rounded-lg"><i className="fa-solid fa-play"></i> Play Trailer</button>
                </div>
                <div>
                    <span className="text-gray-400 text-lg italic">{tagline}</span>
                    <h2 className="text-2xl font-bold">Overview</h2>
                    <p>{overview}</p>
                </div>
                <div className="flex flex-wrap gap-10">
                    <div>
                        <h3 className="text-xl font-bold">Status</h3>
                        <span>{status}</span>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">Original Language</h3>
                        <span>{language(original_language)}</span>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">Budget</h3>
                        <span>$ {budget}</span>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold">Revenue</h3>
                        <span>$ {revenue}</span>
                    </div>
                </div>
            </section>
            {trailerPage && <div>
                {loading && <LoadingPage />}
                <iframe className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-3/4'
                    src={"https://www.youtube.com/embed/" + trailerDetails?.key + "?autoplay=1&mute=1"}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen onLoad={handleIframeLoad}>
                </iframe>
                <button onClick={() => setTrailerPage(false)} className="fixed z-10 text-lg rounded-full p-1 px-3 bg-gray-500 text-white top-16 right-48"><i className="fa-solid fa-xmark"></i></button>
            </div>}
        </div>
    )
}

export default MovieInfo;