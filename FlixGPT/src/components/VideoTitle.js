import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMovieTrailer from '../Hooks/useMovieTrailer';
import LoadingPage from "./LoadingPage";

const VideoTitle = ({ title, description, id }) => {
    const [trailerPage, setTrailerPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const trailerDetails = useMovieTrailer(id);
    if (!trailerDetails) return <LoadingPage/>;

    const handleTrailerClick = () => {
        setTrailerPage(true);
        setLoading(true);
    }

    const handleIframeLoad = () => {
        setLoading(false);
    };

    return (
        <div>
            <div className='absolute z-20 text-white top-48 left-24 w-1/4'>
                <h1 className='text-3xl font-bold my-2'>{title}</h1>
                <p className='my-2'>{description}</p>
                <div className='my-2 flex'>
                    <button onClick={handleTrailerClick} className='bg-white py-3 px-7 rounded mx-2 text-black font-bold hover:bg-opacity-70 flex items-center gap-1'><i className="fa-solid fa-play text-xl"></i> <span>Trailer</span></button>
                    <Link to={"/movie/" + id}><button className='bg-gray-500 py-3 px-7 rounded mx-2 text-white hover:bg-opacity-50 bg-opacity-80 flex items-center gap-1'>
                        <i className="fa-solid fa-circle-info text-2xl"></i>
                        <span> More info</span></button>
                    </Link>
                </div>
            </div>
            {trailerPage && <div>
                {loading && <LoadingPage/>}
                <iframe className='fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-3/4'
                    src={`https://www.youtube.com/embed/${trailerDetails?.key}?autoplay=1&mute=1`}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen onLoad={handleIframeLoad}>
                </iframe>
                <button onClick={() => setTrailerPage(false)} className="fixed z-50 text-lg rounded-full p-1 px-3 bg-gray-500 text-white top-16 right-48"><i className="fa-solid fa-xmark"></i></button>
            </div>}
        </div>
    )
}

export default VideoTitle;