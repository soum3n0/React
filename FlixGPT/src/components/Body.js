import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import Header from './Header';

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