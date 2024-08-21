import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videos",
    initialState:{
        videos:[]
    },
    reducers:{
        addVideos: (state, action)=>{
            state.videos = action.payload;
        }
    }
});

export const {addVideos} = videoSlice.actions;
export default videoSlice.reducer;