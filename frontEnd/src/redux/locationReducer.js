import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
import { locations } from "../Data/statecityData";
 
 

//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;
//const baseurl ="http://localhost:8080"
 

export const getLocations = createAsyncThunk('location/getLocations', async (substring) => {
    //const response = await axios.post(baseurl+'/location/substring',jobExperience); 
    //return response.data;
    
    const response = locations;

    return response;
})


 

const locationSlice = createSlice({
    name: "location",
    initialState: { 
    locations:[],
    getLocationStatus:'idle'
    },
    
   
    extraReducers: (builder) => {
        


        //getLocations
        builder.addCase(getLocations.fulfilled, (state, action) => {
            state.getLocationStatus = 'success';
            state.locations=action.payload;
            
        });
        builder.addCase(getLocations.pending, (state, action) => {
            state.getLocationStatus = 'pending'
        });
        builder.addCase(getLocations.rejected, (state, action) => {
            state.getLocationStatus = 'rejected'
        });

    }
});


export default locationSlice.reducer;
 