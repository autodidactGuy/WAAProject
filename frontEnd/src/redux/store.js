import { configureStore } from "@reduxjs/toolkit";
import jobEReducer from "./jobExperienceReducer";
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
import educationReducer from "./educationReducer";
 


const store = configureStore({
    reducer: {
        userReducer: userReducer,
        jobEReducer:jobEReducer,
        locationReducer:locationReducer,
        educationReducer:educationReducer
    }
});
export default store;