import React from 'react'
import { POSTER_URL } from '../utils/constrants';

const MovieCard = ({ movie }) => {
    if(!movie) return;
    const {original_title, poster_path} = movie;
    return (
        <div className='w-48'>
            <img className='object-cover w-full h-full pb-2' src={POSTER_URL + poster_path} alt={original_title}/>
            {/* <span>{original_title}</span> */}
        </div>
    )
}

export default MovieCard