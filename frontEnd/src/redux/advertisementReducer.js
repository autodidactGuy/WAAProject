import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 

import moment, { Moment } from 'moment';
import { advListFromApi2Front } from "../Utils/Utils";

import { getAccessToken } from "./userReducer";
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;

export const addAdvertisement = createAsyncThunk('advertisement/addAdvertisement', async (advertisement,{dispatch}) => {
     
    const token = getAccessToken();
    
    /*const obj = {
        "publicationDate":moment().format('YYYY-MM-DD'),
        "workload":"123",
        "contract":"222",
        "description":advertisement.Description,
        "profile":advertisement.Title,
        "city":{
            "id":{
                "cityName":advertisement.location[1],
                "stateCode":advertisement.location[0]
            }
        },
        "companyName":advertisement.CompanyName
    }*/

    console.log("add object : ",advertisement)
 
    const responseFromApi = await axios.post(baseurl+'/jobAdvertisement/',advertisement,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );
 
    dispatch(getadvertisementList());
     return "responseFromApi";
})


export const updateAdvertisement = createAsyncThunk('advertisement/updateAdvertisement', async (advertisement,{dispatch}) => {
    
   // console.log('advertisement', advertisement);
    const token = getAccessToken();
    const response = await axios.put(baseurl+'/jobAdvertisement/'+advertisement.id,advertisement,
    {
     headers: {
         'Authorization': `Bearer ${token}` 
      }
    }
  );
  dispatch(getadvertisementList());
     return response;
})


export const deleteAdvertisement = createAsyncThunk('advertisement/deleteAdvertisement', async (id,{dispatch}) => {
     
    const token = getAccessToken();
    const response = await axios.delete(baseurl+'/jobAdvertisement/'+id,
    {
     headers: {
         'Authorization': `Bearer ${token}` 
      }
    }
  );
     dispatch(getadvertisementList());
     return response;
})

export const getadvertisementList = createAsyncThunk('advertisement/getadvertisementList', async () => {
    const token = getAccessToken();
    const response = await axios.get(baseurl+'/jobAdvertisement/postedByme',
    {
        headers: {
            'Authorization': `Bearer ${token}` 
         }
       }
       ); 
 

    return response.data;
})


 

const advertisementReducer = createSlice({
    name: "advertisement",
    initialState: { 
    addAdvertisementstatus:'idle', 
    updateAdvertisementstatus:'idle', 
    deleteAdvertisementstatus:'idle', 
    getadvertisementListstatus:'idle',
    advertisementList:[],
    },
    
   
    extraReducers: (builder) => {
        //add advertisement
        builder.addCase(addAdvertisement.fulfilled, (state, action) => {
            state.addAdvertisementstatus = 'success';
            message.success("added with success!")
        });
        builder.addCase(addAdvertisement.pending, (state, action) => {
            state.addAdvertisementstatus = 'pending'
        });
        builder.addCase(addAdvertisement.rejected, (state, action) => {
            state.addAdvertisementstatus = 'rejected'
            message.error("error, please try again!")
        });

        //update advertisement
        builder.addCase(updateAdvertisement.fulfilled, (state, action) => {
            state.updateAdvertisementstatus = 'success';  
            message.success("updated with success!")          
        });
        builder.addCase(updateAdvertisement.pending, (state, action) => {
            state.updateAdvertisementstatus = 'pending'
        });
        builder.addCase(updateAdvertisement.rejected, (state, action) => {
            state.updateAdvertisementstatus = 'rejected' 
            message.error("error, please try again!")
        });

        //delete advertisement
        builder.addCase(deleteAdvertisement.fulfilled, (state, action) => {
            state.deleteAdvertisementstatus = 'success';            
            message.success("deleted with success!")
        });
        builder.addCase(deleteAdvertisement.pending, (state, action) => {
            state.deleteAdvertisementstatus = 'pending'
        });
        builder.addCase(deleteAdvertisement.rejected, (state, action) => {
            state.deleteAdvertisementstatus = 'rejected' 
            message.error("error, please try again!")
        });


        //getadvertisementList
        builder.addCase(getadvertisementList.fulfilled, (state, action) => {
            state.getadvertisementListstatus = 'success';
            let convertedList = advListFromApi2Front(action.payload);
            console.log("converted: ",convertedList)
            state.advertisementList=convertedList;
        
            
        });
        builder.addCase(getadvertisementList.pending, (state, action) => {
            state.getadvertisementListstatus = 'pending'
        });
        builder.addCase(getadvertisementList.rejected, (state, action) => {
            state.getadvertisementListstatus = 'rejected'
            message.error("error: can't get the advertisement list!")
        });

       

    }
});

export default advertisementReducer.reducer;