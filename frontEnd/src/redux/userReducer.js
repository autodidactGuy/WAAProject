import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
import { workExperienceData } from '../Data/WorkExperienceData'
//const baseurl = process.env.REACT_APP_API_URL;
const baseurl ="http://localhost:8080"
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
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkB0ZXN0LmNvbSIsImlhdCI6MTY3MTUwNjc4MywiZXhwIjoxNjcxNTA3NjgzfQ.k6d_uN04bILp1UN8yxDvstVeJFXMQ6YYWy4hzdNhwGhMONljGWrmcfEl-9rr2t53zdmjoxOwkpp9qdcY3orkSQ"
    const jobExperience2={
        "jobTitle": "QQQADDDADEdddd",

        "fromTime": "2022-12-19",
    
        "endTime": "2022-12-19",
    
        "companyName": "abc",
    
        "details": "abc",
    
        "city": {
    
            "id": {
    
                    "cityName": "Akiachak",
    
                    "stateCode": "AK"
    
                }
    
        }
    }
    const responsetemp = await axios.post(baseurl+'/jobExperience',jobExperience2,
     {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      }
    );

    
    const response= {
        Id: "1",
		UserId: "1",
		JobTitle: jobExperience.JobTitle,
		From: "12/01/2022",
		To: "12/01/2022",
		IsCurrentPosition : jobExperience.IsCurrentPosition,
		Company: jobExperience.Company,
		Details: jobExperience.Details,
    }
    
     
      
     return response;
})


export const updateJobExperience = createAsyncThunk('user/updateJobExperience', async (jobExperience) => {
    
    
    const response= {
        Id: jobExperience.Id,
			UserId: jobExperience.UserId,
			JobTitle: jobExperience.JobTitle,
			From: "12/01/2022",
			To: "12/01/2022",
			IsCurrentPosition: true,
			Company: "jfjf",
			Details: "Description",
    }
  
 
     return response;
})

export const getJobExperienceList = createAsyncThunk('user/getJobExperienceList', async () => {
    //const response = await axios.post(baseurl+'/users/getjobexperiencelist',jobExperience); 
    //return response.data;
    
    const response = workExperienceData;

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
    isLogged:isLogged()
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
            state.addjobtatus = 'success';
            state.jobExperienceList=[...state.jobExperienceList , action.payload];
            
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

    }
});


export default userSlice.reducer;
export const { logout } = userSlice.actions;