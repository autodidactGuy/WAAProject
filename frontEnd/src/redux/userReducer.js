import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseurl = process.env.REACT_APP_API_URL;;
export const registerUser = createAsyncThunk('user/registerUser', async (user) => {
    const response = await axios.post(baseurl+'/users',user); //react day 2 backend spring app
    console.log("response", response);
    return response.data;
})
const userSlice = createSlice({
    name: "user",
    initialState: { status: 'idle' },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'success';
            
        });
        builder.addCase(registerUser.pending, (state, action) => {
            state.status = 'pending;'
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = 'rejected;'
        });
    }
});


export default userSlice.reducer;