import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",
    initialState:{
        liveChats:[],
    },
    reducers:{
        addMessage: (state, action) => {
            state.liveChats.splice(10,1);
            state.liveChats.unshift(action.payload);
        }
    }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;