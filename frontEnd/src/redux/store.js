import { configureStore } from "@reduxjs/toolkit";
import jobEReducer from "./jobExperienceReducer";
import userReducer from "./userReducer";
 


const store = configureStore({
    reducer: {
        userReducer: userReducer,
        jobEReducer:jobEReducer
    }
});
export default store;