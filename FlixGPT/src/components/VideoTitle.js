import React from 'react';

const VideoTitle = ({ title, description }) => {
    return (
        <div className='aspect-video absolute z-20 text-white top-48 left-24 w-1/4'>
            <h1 className='text-3xl font-bold my-2'>{title}</h1>
            <p className='my-2'>{description}</p>
            <div className='my-2'>
                <button className='bg-white py-3 px-9 rounded mx-2 text-black font-bold hover:bg-opacity-70'>Play</button>
                <button className='bg-gray-500 py-3 px-9 rounded mx-2 text-white hover:bg-opacity-50 bg-opacity-80'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle;