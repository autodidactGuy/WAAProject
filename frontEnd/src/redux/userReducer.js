import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
import { locations } from "../Data/statecityData";
import { workExperienceData } from '../Data/WorkExperienceData'
import { Moment } from 'moment';
import { convertJobExperienceFrontToApi, dateToString } from './../Utils/Utils';
//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;
//const baseurl ="http://localhost:8080"
const sleepFunction=()=>{
    new Promise(resolve => setTimeout(resolve, 10000)).then();
}
const getAccessToken=()=>{
    return localStorage.getItem('accessToken');
     
}
const getRefreshToken=()=>{
    return localStorage.getItem('refreshToken');
}
const setAccessToken=(accesstoken)=>{
    localStorage.setItem('accessToken', accesstoken);
    
}
const setRefreshToken=(refreshtoken)=>{
    
    localStorage.setItem('refreshToken', refreshtoken);
}
 

const isLogged=()=>{
    return localStorage.getItem('accessToken')!=null
}
export const registerUser = createAsyncThunk('user/registerUser', async (user) => {
    const response = await axios.post(baseurl+'/user/signup',user); 
     
    return response.data;
})

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {

    const response = await axios.post(baseurl+'/user/login',user); 
    
    return response.data;
})

export const addJobExperience = createAsyncThunk('user/addJobExperience', async (jobExperience) => {
     
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

    // const response= {
    //     Id: jobExperience.Id,
	// 		UserId: jobExperience.UserId,
	// 		JobTitle: jobExperience.JobTitle,
	// 		From: dateToString(jobExperience.FromTo[0]),
	// 		To: dateToString(jobExperience.FromTo[1]),
	// 		IsCurrentPosition: jobExperience.IsCurrentPosition,
	// 		Company: jobExperience.Company,
	// 		Details: jobExperience.Details,
    //         State: jobExperience.location[0],
    //         City: jobExperience.location[1]
    // }

    // const response= {
    //     Id: "1",
	// 	UserId: "1",
	// 	JobTitle: jobExperience.JobTitle,
	// 	From: "12/01/2022",
	// 	To: "12/01/2022",
	// 	IsCurrentPosition : jobExperience.IsCurrentPosition,
	// 	Company: jobExperience.Company,
	// 	Details: jobExperience.Details,
    // }
    
      
     return responseFromApi;
})


export const updateJobExperience = createAsyncThunk('user/updateJobExperience', async (jobExperience) => {
    
    console.log('jobexperience', jobExperience);
    
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
  
    console.log(response);
     return response;
})

export const getJobExperienceList = createAsyncThunk('user/getJobExperienceList', async () => {
    //const response = await axios.post(baseurl+'/users/getjobexperiencelist',jobExperience); 
    //return response.data;
    
    const response = workExperienceData;

    return response;
})


export const getLocations = createAsyncThunk('user/getLocations', async () => {
    //const response = await axios.post(baseurl+'/users/getjobexperiencelist',jobExperience); 
    //return response.data;
    
    const response = locations;

    return response;
})


 

const userSlice = createSlice({
    name: "user",
    initialState: { registerstatus: 'idle', 
    loginstatus:'idle', 
    addjobtatus:'idle', 
    updatejobtatus:'idle', 
    getJobExperienceListstatus:'idle',
    jobExperienceList:[],
    isLogged:isLogged(),
    locations:[],
    getLocationStatus:'idle'
    },
    
    reducers:{
        logout:(state)=>{
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            state.isLogged=isLogged()
            
            message.success("Logout success! See you soon")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.registerstatus = 'success';
            message.success("Register success! Please login")
            
        });
        builder.addCase(registerUser.pending, (state, action) => {
            state.registerstatus = 'pending'
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.registerstatus = 'rejected'
            message.error("Register error! Please try again")
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loginstatus = 'success';
            
            setAccessToken(action.payload.accessToken)
            setRefreshToken(action.payload.refreshToken)
            state.isLogged=isLogged()
            message.success("Login success! Welcome")

            
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.loginstatus = 'pending'
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loginstatus = 'rejected'
            message.error("Login Error! Please try again")
        });


        //add job
        builder.addCase(addJobExperience.fulfilled, (state, action) => {
            alert('Add job experience')
            state.addjobtatus = 'success';
            state.jobExperienceList=[...state.jobExperienceList , action.payload];
            console.log('length ', state.jobExperienceList.length);
        });
        builder.addCase(addJobExperience.pending, (state, action) => {
            state.addjobtatus = 'pending'
        });
        builder.addCase(addJobExperience.rejected, (state, action) => {
            state.addjobtatus = 'rejected'
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


export default userSlice.reducer;
export const { logout } = userSlice.actions;