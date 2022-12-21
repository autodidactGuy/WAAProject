import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 

import { Moment } from 'moment';

import { getAccessToken } from "./userReducer";
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;

export const addEducation = createAsyncThunk('education/addEducation', async (education) => {
     
    const token = getAccessToken();

    const response= {
            
    }
 

     const responseFromApi = await axios.post(baseurl+'/education',educationToSend,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );

      
     return responseFromApi;
})


export const updateEducation = createAsyncThunk('education/updateEducation', async (education) => {
    
    console.log('education', education);
    
    const response= {
 
    }
  
    console.log(response);
     return response;
})

export const geteducationList = createAsyncThunk('education/geteducationList', async () => {
    const response = await axios.get(baseurl+'/education'); 
 

    console.log('education list  : ',response);
    return response.data;
})


 

const educationReducer = createSlice({
    name: "education",
    initialState: { 
    addEducationstatus:'idle', 
    updateEducationtatus:'idle', 
    geteducationListstatus:'idle',
    educationList:[],
    },
    
   
    extraReducers: (builder) => {
        

        //add education
        builder.addCase(addEducation.fulfilled, (state, action) => {
            state.addEducationstatus = 'success';
            state.educationList=[...state.educationList , action.payload];
            console.log('length ', state.educationList.length);
        });
        builder.addCase(addEducation.pending, (state, action) => {
            state.addEducationstatus = 'pending'
        });
        builder.addCase(addEducation.rejected, (state, action) => {
            state.addEducationstatus = 'rejected'
        });

        //update education
        builder.addCase(updateEducation.fulfilled, (state, action) => {
            state.updateEducationtatus = 'success';

            const obj = action.payload;
           
            const id =obj.Id;
             
            let newState=[...state.educationList]
             
            for(let i =0 ;i <newState.length;i++){
                let o = newState[i]
                if(o.Id===id)
                {
                    newState[i]=obj;
                    
                    break;
                }
            }  
             
            state.educationList=newState
             
            
        });
        builder.addCase(updateEducation.pending, (state, action) => {
            state.updateEducationtatus = 'pending'
        });
        builder.addCase(updateEducation.rejected, (state, action) => {
            state.updateEducationtatus = 'rejected' 
        });


        //geteducationList
        builder.addCase(geteducationList.fulfilled, (state, action) => {
            state.geteducationListstatus = 'success';
            state.educationList=action.payload;
            
        });
        builder.addCase(geteducationList.pending, (state, action) => {
            state.geteducationListstatus = 'pending'
        });
        builder.addCase(geteducationList.rejected, (state, action) => {
            state.geteducationListstatus = 'rejected'
        });

       

    }
});

export default educationReducer.reducer;