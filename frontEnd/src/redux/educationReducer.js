import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 

import { Moment } from 'moment';
import { educationFromFront2API, educListFromAPI2Front } from "../Utils/Utils";

import { getAccessToken } from "./userReducer";
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;

export const addEducation = createAsyncThunk('education/addEducation', async (education,{dispatch}) => {
     
    const token = getAccessToken();
    const valueToAdd= educationFromFront2API(education);
    const responseFromApi = await axios.post(baseurl+'/education',valueToAdd,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );

    dispatch(geteducationList()) 
     return responseFromApi;
})


export const updateEducation = createAsyncThunk('education/updateEducation', async (education,{dispatch}) => {
    
 
    const token = getAccessToken();
    const response=  await axios.put(baseurl+'/education/'+education.id,education,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );

    dispatch(geteducationList()) 
     return response;
})

export const deleteEducation = createAsyncThunk('education/deleteEducation', async (id,{dispatch}) => {
    
 
    const token = getAccessToken();
    const response=  await axios.put(baseurl+'/education/'+id,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );

    dispatch(geteducationList()) 
     return response;
})

export const geteducationList = createAsyncThunk('education/geteducationList', async () => {
    const token = getAccessToken();
    const response = await axios.get(baseurl+'/education',
    {
        headers: {
            'Authorization': `Bearer ${token}` 
         }
       }
    ); 
 

    console.log('education list  : ',response);
    
    return response.data;
})


 

const educationReducer = createSlice({
    name: "education",
    initialState: { 
    addEducationstatus:'idle', 
    updateEducationtatus:'idle', 
    deleteEducationtatus:'idle', 
    geteducationListstatus:'idle',
    educationList:[],
    },
    
   
    extraReducers: (builder) => {
        

        //add education
        builder.addCase(addEducation.fulfilled, (state, action) => {
            state.addEducationstatus = 'success';
            message.success("added with success!")
        });
        builder.addCase(addEducation.pending, (state, action) => {
            state.addEducationstatus = 'pending'
        });
        builder.addCase(addEducation.rejected, (state, action) => {
            state.addEducationstatus = 'rejected'
            message.error("error, please try again!")
        }); 

        //update education
        builder.addCase(updateEducation.fulfilled, (state, action) => {
            state.updateEducationtatus = 'success';  
            message.success("edited with success!")
        });
        builder.addCase(updateEducation.pending, (state, action) => {
            state.updateEducationtatus = 'pending'
        });
        builder.addCase(updateEducation.rejected, (state, action) => {
            state.updateEducationtatus = 'rejected' 
            message.error("error, please try again!")
        });

        //delete education
        builder.addCase(deleteEducation.fulfilled, (state, action) => {
            state.deleteEducationtatus = 'success';  
            message.success("deleted with success!")
        });
        builder.addCase(deleteEducation.pending, (state, action) => {
            state.deleteEducationtatus = 'pending'
        });
        builder.addCase(deleteEducation.rejected, (state, action) => {
            state.deleteEducationtatus = 'rejected' 
            message.error("error, please try again!")
        });


        //geteducationList
        builder.addCase(geteducationList.fulfilled, (state, action) => {
            state.geteducationListstatus = 'success';
            
            state.educationList=educListFromAPI2Front(action.payload);
            
        });
        builder.addCase(geteducationList.pending, (state, action) => {
            state.geteducationListstatus = 'pending'
        });
        builder.addCase(geteducationList.rejected, (state, action) => {
            state.geteducationListstatus = 'rejected'
            message.error("error, can't load the education list!")
        });
    }
});

export default educationReducer.reducer;