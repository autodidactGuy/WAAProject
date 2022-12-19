import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseurl = process.env.REACT_APP_API_URL;;
export const registerUser = createAsyncThunk('user/registerUser', async (user) => {
    const response = await axios.post(baseurl+'/users/signup',user); 
    console.log("response", response);
    return response.data;
})

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
    const response = await axios.post(baseurl+'/users/login',user); 
    console.log("response", response);
    return response.data;
})


const userSlice = createSlice({
    name: "user",
    initialState: { registerstatus: 'idle', loginstatus:'idle' },
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
            
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.loginstatus = 'pending;'
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loginstatus = 'rejected;'
        });

    }
});


export default userSlice.reducer;