import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import MovieInfo from './MovieInfo';
import AiPage from './AiPage';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/browse",
                element: <Browse />,
            },
            {
                path: "/movie/:movieId",
                element: <MovieInfo/>
            },
            {
                path: "/flixai",
                element: <AiPage/>
            }
        ]
    },
]);
const Body = () => {
    return (
        <div className='relative'>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;