import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { workExperienceData } from '../Data/WorkExperienceData'
const baseurl = process.env.REACT_APP_API_URL;;
export const registerUser = createAsyncThunk('user/registerUser', async (user) => {
    const response = await axios.post(baseurl+'/user/signup',user); 
    console.log("response", response);
    return response.data;
})

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
    const response = await axios.post(baseurl+'/user/login',user); 
    console.log("response", response);
    return response.data;
})

export const addJobExperience = createAsyncThunk('user/addJobExperience', async (jobExperience) => {
    //const response = await axios.post(baseurl+'/users/addjob',jobExperience); 
    //console.log("response", response);
    //return response.data;
   
    console.log(jobExperience);
    
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
    console.log('before promise');
     await new Promise(resolve => setTimeout(resolve, 3)).then();
     console.log("before return");
     return response;
})


export const updateJobExperience = createAsyncThunk('user/updateJobExperience', async (jobExperience) => {
    //const response = await axios.post(baseurl+'/users/updatejob',jobExperience); 
    //console.log("response", response);
    //return response.data;
    
    console.log('object to update : ',jobExperience);
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
    console.log('before promise');
     await new Promise(resolve => setTimeout(resolve, 3000)).then();
     console.log("before return");
     return response;
})

export const getJobExperienceList = createAsyncThunk('user/getJobExperienceList', async () => {
    //const response = await axios.post(baseurl+'/users/getjobexperiencelist',jobExperience); 
    //return response.data;
    
    const response = workExperienceData;
//    console.log("response", response);
    return response;
})



 

const userSlice = createSlice({
    name: "user",
    initialState: { registerstatus: 'idle', 
    loginstatus:'idle', 
    addjobtatus:'idle', 
    updatejobtatus:'idle', 
    getJobExperienceListstatus:'idle',
    jobExperienceList:[] 
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.registerstatus = 'success';
            
        });
        builder.addCase(registerUser.pending, (state, action) => {
            state.registerstatus = 'pending;'
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.registerstatus = 'rejected;'
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loginstatus = 'success';
            alert(action.payload)
            console.log(action.payload)
            
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.loginstatus = 'pending;'
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loginstatus = 'rejected;'
        });


        //add job
        builder.addCase(addJobExperience.fulfilled, (state, action) => {
            state.addjobtatus = 'success';
            console.log("value of list in add",state.jobExperienceList);
            state.jobExperienceList=[...state.jobExperienceList , action.payload];
            console.log("new array : ",state.jobExperienceList);
            
        });
        builder.addCase(addJobExperience.pending, (state, action) => {
            state.addjobtatus = 'pending;'
        });
        builder.addCase(addJobExperience.rejected, (state, action) => {
            state.addjobtatus = 'rejected;'
        });

        //update job
        builder.addCase(updateJobExperience.fulfilled, (state, action) => {
            state.updatejobtatus = 'success';

            const obj = action.payload;
           
            const id =obj.Id;
            console.log("obj:",obj)
            console.log("id:",id);
            console.log('the list : ',state.jobExperienceList)
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
            state.updatejobtatus = 'pending;'
        });
        builder.addCase(updateJobExperience.rejected, (state, action) => {
            state.updatejobtatus = 'rejected;'
        });


        //getJobExperienceList
        builder.addCase(getJobExperienceList.fulfilled, (state, action) => {
            state.getJobExperienceListstatus = 'success';
            state.jobExperienceList=action.payload;
            
        });
        builder.addCase(getJobExperienceList.pending, (state, action) => {
            state.getJobExperienceListstatus = 'pending;'
        });
        builder.addCase(getJobExperienceList.rejected, (state, action) => {
            state.getJobExperienceListstatus = 'rejected;'
        });

    }
});


export default userSlice.reducer;