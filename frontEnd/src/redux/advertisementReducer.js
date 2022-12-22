import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 

import { Moment } from 'moment';

import { getAccessToken } from "./userReducer";
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;

export const addAdvertisement = createAsyncThunk('advertisement/addAdvertisement', async (advertisement,{dispatch}) => {
     
    const token = getAccessToken();

    const obj = {
        "publicationDate":"2022-12-21",
        "workload":"123",
        "contract":"222",
        "description":"123",
        "profile":"123",
        "city":{
            "id":{
                "cityName":"Adjuntas",
                "stateCode":"PR"
            }
        },
        "companyName":"ABC"
    }

 

     const responseFromApi = await axios.post(baseurl+'/jobAdvertisement/',advertisement,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );
 
    dispatch(getadvertisementList());
     return responseFromApi;
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
    const response = await axios.get(baseurl+'/advertisement'); 
 


    
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
            state.advertisementList=action.payload;
            
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