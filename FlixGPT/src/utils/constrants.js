export const API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer'+process.env.REACT_APP_TMDB_API_OPTION,
    }
};

export const NOW_PLAYING_MOVIE_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const MOVIE_VIDEO_API = "https://api.themoviedb.org/3/movie/";
export const GET_MOVIE_BY_NAME_API = "https://api.themoviedb.org/3/search/movie?query=";


export const GPT_API_KEY = process.env.REACT_APP_GPT_API_KEY;

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const POSTER_URL = "https://image.tmdb.org/t/p/w500";
