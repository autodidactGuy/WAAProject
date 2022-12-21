import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 

import { Moment } from 'moment';

import { getAccessToken } from "./userReducer";
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;

export const addAdvertisement = createAsyncThunk('advertisement/addAdvertisement', async (advertisement) => {
     
    const token = getAccessToken();

    const response= {
            
    }
 

     const responseFromApi = await axios.post(baseurl+'/advertisement',advertisement,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );

      
     return responseFromApi;
})


export const updateAdvertisement = createAsyncThunk('advertisement/updateAdvertisement', async (advertisement) => {
    
    console.log('advertisement', advertisement);
    
    const response= {
 
    }
  
    console.log(response);
     return response;
})

export const getadvertisementList = createAsyncThunk('advertisement/getadvertisementList', async () => {
    const response = await axios.get(baseurl+'/advertisement'); 
 

    console.log('advertisement list  : ',response);
    return response.data;
})


 

const advertisementReducer = createSlice({
    name: "advertisement",
    initialState: { 
    addAdvertisementstatus:'idle', 
    updateAdvertisementstatus:'idle', 
    getadvertisementListstatus:'idle',
    advertisementList:[],
    },
    
   
    extraReducers: (builder) => {
        

        //add advertisement
        builder.addCase(addAdvertisement.fulfilled, (state, action) => {
            state.addAdvertisementstatus = 'success';
            state.advertisementList=[...state.advertisementList , action.payload];
            console.log('length ', state.advertisementList.length);
        });
        builder.addCase(addAdvertisement.pending, (state, action) => {
            state.addAdvertisementstatus = 'pending'
        });
        builder.addCase(addAdvertisement.rejected, (state, action) => {
            state.addAdvertisementstatus = 'rejected'
        });

        //update advertisement
        builder.addCase(updateAdvertisement.fulfilled, (state, action) => {
            state.updateAdvertisementstatus = 'success';

            const obj = action.payload;
           
            const id =obj.Id;
             
            let newState=[...state.advertisementList]
             
            for(let i =0 ;i <newState.length;i++){
                let o = newState[i]
                if(o.Id===id)
                {
                    newState[i]=obj;
                    
                    break;
                }
            }  
             
            state.advertisementList=newState
             
            
        });
        builder.addCase(updateAdvertisement.pending, (state, action) => {
            state.updateAdvertisementstatus = 'pending'
        });
        builder.addCase(updateAdvertisement.rejected, (state, action) => {
            state.updateAdvertisementstatus = 'rejected' 
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
        });

       

    }
});

export default advertisementReducer.reducer;