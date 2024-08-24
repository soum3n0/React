export const API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQ0ZDQ3MDcxYTE4MTY2Y2EzZmY0MzU2NzQwMzY1ZiIsIm5iZiI6MTcyMzQ1OTc5Ny4zMzI4MDUsInN1YiI6IjY2YjllN2NiZTY2ZWVmOGVhMDZjNGI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i634cTvfDcGcG_zm_HBf4rgpy9UBZmnTkNJ42RaQhDY'
    }
};

export const NETFLIX_BG_POSTER = 'https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg';

export const NOW_PLAYING_MOVIE_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const TOP_RATED_MOVIE_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
export const UPCOMING_MOVIE_API = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
export const MOVIE_VIDEO_API = "https://api.themoviedb.org/3/movie/";
export const POSTER_URL = "https://image.tmdb.org/t/p/w500";
export const GET_MOVIE_BY_NAME_API = "https://api.themoviedb.org/3/search/movie?query=";
export const GET_MOVIE_BY_ID = "https://api.themoviedb.org/3/movie/";
export const IMDB_LINK = "https://www.imdb.com/title/";

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;