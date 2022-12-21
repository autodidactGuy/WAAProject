import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 
import { workExperienceData } from '../Data/WorkExperienceData'
import { Moment } from 'moment';
import { convertJobExperienceFrontToApi, dateToString,jobListFromApi2Front } from './../Utils/Utils';
import { getAccessToken } from "./userReducer";
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;

export const addJobExperience = createAsyncThunk('jobExperience/addJobExperience', async (jobExperience) => {
     
    const token = getAccessToken();
    
    const response= {
        Id: jobExperience.Id,
			UserId: jobExperience.UserId,
			JobTitle: jobExperience.JobTitle,
			From: dateToString(jobExperience.FromTo[0]),
			To: dateToString(jobExperience.FromTo[1]),
			IsCurrentPosition: jobExperience.IsCurrentPosition,
			Company: jobExperience.Company,
			Details: jobExperience.Details,
            State: jobExperience.location[0],
            City: jobExperience.location[1]
    }


    const jobExperienceToSend = convertJobExperienceFrontToApi(response);

     const responseFromApi = await axios.post(baseurl+'/jobExperience',jobExperienceToSend,
      {
       headers: {
           'Authorization': `Bearer ${token}` 
        }
      }
    );

      
     return responseFromApi;
})


export const updateJobExperience = createAsyncThunk('jobExperience/updateJobExperience', async (jobExperience) => {
    
    const token = getAccessToken();
    const response= {
            Id: jobExperience.Id,
			UserId: jobExperience.UserId,
			JobTitle: jobExperience.JobTitle,
			From: dateToString(jobExperience.FromTo[0]),
			To: dateToString(jobExperience.FromTo[1]),
			IsCurrentPosition: jobExperience.IsCurrentPosition,
			Company: jobExperience.Company,
			Details: jobExperience.Details,
            State: jobExperience.location[0],
            City: jobExperience.location[1]
    }
  
    const jobExperienceToSend = convertJobExperienceFrontToApi(response);

    const responseFromApi = await axios.put(baseurl+'/jobExperience/'+jobExperience.Id,jobExperienceToSend,
     {
      headers: {
          'Authorization': `Bearer ${token}` 
       }
     }
   );
    
     
     return response;
})

export const getJobExperienceList = createAsyncThunk('jobExperience/getJobExperienceList', async () => {
    const token = getAccessToken();
    const response = await axios.get(baseurl+'/jobExperience',
    {
        headers: {
            'Authorization': `Bearer ${token}` 
         }
       }
    ); 
    //return response.data;
    
    //const response = workExperienceData;
    console.log('job list experience : ',response);
    return jobListFromApi2Front(response.data);
})


 

const jobEReducer = createSlice({
    name: "jobExperience",
    initialState: { 
    addjobEstatus:'idle', 
    updatejobtatus:'idle', 
    getJobExperienceListstatus:'idle',
    jobExperienceList:[],
    
   
    },
    
   
    extraReducers: (builder) => {
        

        //add job
        builder.addCase(addJobExperience.fulfilled, (state, action) => {
            state.addjobEstatus = 'success';
            state.jobExperienceList=[...state.jobExperienceList , action.payload];
            console.log('length ', state.jobExperienceList.length);
        });
        builder.addCase(addJobExperience.pending, (state, action) => {
            state.addjobEstatus = 'pending'
        });
        builder.addCase(addJobExperience.rejected, (state, action) => {
            state.addjobEstatus = 'rejected'
        });

        //update job
        builder.addCase(updateJobExperience.fulfilled, (state, action) => {
            state.updatejobtatus = 'success';

            const obj = action.payload;
           
            const id =obj.Id;
             
            let newState=[...state.jobExperienceList]
             
            for(let i =0 ;i <newState.length;i++){
                let o = newState[i]
                if(o.Id===id)
                {
                    newState[i]=obj;
                    
                    break;
                }
            }  
             
            state.jobExperienceList=newState
             
            
        });
        builder.addCase(updateJobExperience.pending, (state, action) => {
            state.updatejobtatus = 'pending'
        });
        builder.addCase(updateJobExperience.rejected, (state, action) => {
            state.updatejobtatus = 'rejected' 
        });


        //getJobExperienceList
        builder.addCase(getJobExperienceList.fulfilled, (state, action) => {
            state.getJobExperienceListstatus = 'success';
            state.jobExperienceList=action.payload;
            
        });
        builder.addCase(getJobExperienceList.pending, (state, action) => {
            state.getJobExperienceListstatus = 'pending'
        });
        builder.addCase(getJobExperienceList.rejected, (state, action) => {
            state.getJobExperienceListstatus = 'rejected'
        });

       

    }
});

export default jobEReducer.reducer;