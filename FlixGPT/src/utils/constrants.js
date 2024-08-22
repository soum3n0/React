export const API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQ0ZDQ3MDcxYTE4MTY2Y2EzZmY0MzU2NzQwMzY1ZiIsIm5iZiI6MTcyMzQ1OTc5Ny4zMzI4MDUsInN1YiI6IjY2YjllN2NiZTY2ZWVmOGVhMDZjNGI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i634cTvfDcGcG_zm_HBf4rgpy9UBZmnTkNJ42RaQhDY'
    }
};

export const NOW_PLAYING_MOVIE_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const MOVIE_VIDEO_API = "https://api.themoviedb.org/3/movie/";
export const POSTER_URL = "https://image.tmdb.org/t/p/w500";
export const GET_MOVIE_BY_NAME_API = "https://api.themoviedb.org/3/search/movie?query=";

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;