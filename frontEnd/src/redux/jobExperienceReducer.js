import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 
import { workExperienceData } from '../Data/WorkExperienceData'
import { Moment } from 'moment';
import { convertJobExperienceFrontToApi, dateToString,jobListFromApi2Front } from './../Utils/Utils';
import { getAccessToken } from "./userReducer";
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;

export const addJobExperience = createAsyncThunk('jobExperience/addJobExperience', async (jobExperience,{dispatch}) => {
     
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
    dispatch(getJobExperienceList());

      
     return response;
})


export const updateJobExperience = createAsyncThunk('jobExperience/updateJobExperience', async (jobExperience,{dispatch}) => {
    
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
  
    let jobExperienceToSend = convertJobExperienceFrontToApi(response);
    jobExperienceToSend = {...jobExperienceToSend,id:response.Id}
    const responseFromApi = await axios.put(baseurl+'/jobExperience/'+jobExperience.Id,jobExperienceToSend,
     {
      headers: {
          'Authorization': `Bearer ${token}` 
       }
     }
   );

   dispatch(getJobExperienceList());
    
     
     return response;
})

export const deleteJobExp = createAsyncThunk('jobExperience/deleteJobExp', async (id,{dispatch}) => {
      
    const token = getAccessToken();
    const response = await axios.delete(baseurl+'/jobExperience/'+id,
     {
      headers: {
          'Authorization': `Bearer ${token}` 
       }
     }
   );
    dispatch(getJobExperienceList());
     
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
    

    return jobListFromApi2Front(response.data);
})


 

const jobEReducer = createSlice({
    name: "jobExperience",
    initialState: { 
    addjobEstatus:'idle', 
    updatejobtatus:'idle', 
    deletejobtatus:'idle', 
    getJobExperienceListstatus:'idle',
    jobExperienceList:[],
    
   
    },
    
   
    extraReducers: (builder) => {
        

        //add job
        builder.addCase(addJobExperience.fulfilled, (state, action) => {
            state.addjobEstatus = 'success';
            //state.jobExperienceList=[...state.jobExperienceList , action.payload];
            message.success("added with success!")
        });
        builder.addCase(addJobExperience.pending, (state, action) => {
            state.addjobEstatus = 'pending'
        });
        builder.addCase(addJobExperience.rejected, (state, action) => {
            state.addjobEstatus = 'rejected'
            message.success("error, please try again!")
        });

        //update job
        builder.addCase(updateJobExperience.fulfilled, (state, action) => {
            state.updatejobtatus = 'success';
 
            message.success("updated with success!") 
            
        });
        builder.addCase(updateJobExperience.pending, (state, action) => {
            state.updatejobtatus = 'pending'
        });
        builder.addCase(updateJobExperience.rejected, (state, action) => {
            state.updatejobtatus = 'rejected' 
            message.success("error, please try again!")
        });



        //deleteJobExp
        builder.addCase(deleteJobExp.fulfilled, (state, action) => {
            
            state.deletejobtatus = 'success';
           
            message.success("delete with success!")
            
        });
        builder.addCase(deleteJobExp.pending, (state, action) => {
            state.deletejobtatus = 'pending'
        });
        builder.addCase(deleteJobExp.rejected, (state, action) => {
            state.deletejobtatus = 'rejected'
            message.error("error please try again!")
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