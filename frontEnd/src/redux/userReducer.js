import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
 
import { workExperienceData } from '../Data/WorkExperienceData'
import { Moment } from 'moment';

//use command :  'npm run start:Dev'  instead of 'npm start'
const baseurl = process.env.REACT_APP_API_URL;
//const baseurl ="http://localhost:8080"
const sleepFunction=()=>{
    new Promise(resolve => setTimeout(resolve, 10000)).then();
}
export const getAccessToken=()=>{
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
 

export const editProfile = createAsyncThunk('user/editProfile', async (user) => {

    const response = await axios.post(baseurl+'/user/edit',user); 
    
    return response.data;
})

 

 

const userSlice = createSlice({
    name: "user",
    initialState: { 
    registerstatus: 'idle', 
    loginstatus:'idle', 
    editprofilestatus:'idle',
    userInfo:{}
    ,
    isLogged:isLogged(),
 
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
            state.userInfo=action.payload.userInfo;
            message.success("Login success! Welcome")

            
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.loginstatus = 'pending'
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loginstatus = 'rejected'
            message.error("Login Error! Please try again")
        });

        //edit profile

        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.editprofilestatus = 'success';
            message.success("Update success! Welcome")

            
        });
        builder.addCase(editProfile.pending, (state, action) => {
            state.editprofilestatus = 'pending'
        });
        builder.addCase(editProfile.rejected, (state, action) => {
            state.editprofilestatus = 'rejected'
            message.error("Update Error! Please try again")
        });
         

    }
});


export default userSlice.reducer;
export const { logout } = userSlice.actions;