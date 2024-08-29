import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState:{
        lang: "en",
        langName: "English",
    },
    reducers:{
        changeLanguage: (state, action) =>{
            // console.log(action.payload);
            const arr = action.payload.split(",");
            state.lang = arr[0];
            state.langName = arr[1];
        },
    },
});

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;