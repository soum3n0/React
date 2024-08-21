import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptPage: false,
        searchResult: null,
        gptMovies: null,
    },
    reducers:{
        toggleGptPage: (state, action) =>{
            state.gptPage = !state.gptPage;
        },
        updateSearchResult: (state, action)=>{
            const {movieName, movieList} = action.payload;
            state.searchResult = movieName;
            state.gptMovies = movieList;
        },
    }
});

export const {toggleGptPage, updateSearchResult} = gptSlice.actions;
export default gptSlice.reducer;