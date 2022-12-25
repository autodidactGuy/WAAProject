import { configureStore } from "@reduxjs/toolkit";
import jobEReducer from "./jobExperienceReducer";
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
import educationReducer from "./educationReducer";
import advertisementReducer from "./advertisementReducer";
 


const store = configureStore({
    reducer: {
        userReducer: userReducer,
        jobEReducer:jobEReducer,
        locationReducer:locationReducer,
        educationReducer:educationReducer,
        advertisementReducer:advertisementReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});
export default store;