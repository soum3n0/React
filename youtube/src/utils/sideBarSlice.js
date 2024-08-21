import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: "Sidebar",
    initialState: {
        status : true,
    },
    reducers:{
        changeStatus : (state) => {
            state.status = !state.status;
        },
        closeSideBar : (state) => {
            state.status = false;
        },
        openSideBar : (state) => {
            state.status = true;
        },
    }
});

export const {changeStatus, closeSideBar, openSideBar} = sideBarSlice.actions; 

export default sideBarSlice.reducer;