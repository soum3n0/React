import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
    reducer:{
        sideBar : sideBarSlice,
        search : searchSlice,
        liveChat : chatSlice,
        videos: videoSlice,
    }
});

export default store;