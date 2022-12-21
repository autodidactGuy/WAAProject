import { configureStore } from "@reduxjs/toolkit";
import jobEReducer from "./jobExperienceReducer";
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
 


const store = configureStore({
    reducer: {
        userReducer: userReducer,
        jobEReducer:jobEReducer,
        locationReducer:locationReducer
    }
});
export default store;