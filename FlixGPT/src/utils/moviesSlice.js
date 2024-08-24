import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:{},
        popularMovies: {},
        topRatedMovies: {},
        upcomingMovies: {},
        trailerVideo: {},
        movieInfo: {},
    },
    reducers:{ 
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailerVideo = action.payload;
        },
        addMovieInfo: (state, action)=>{
            state.movieInfo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo, addMovieInfo} = moviesSlice.actions;
export default moviesSlice.reducer;