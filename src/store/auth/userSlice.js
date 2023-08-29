import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const loginUser = createAsyncThunk(
  'user/login',
  async (userCredentials) => {
    const request = await axios.post('https://reqres.in/api', userCredentials)
    const response = await request.data.data
    localStorage.setItem("user", JSON.stringify(response))
    return response
  }
)
const initialState = {
  loading: false,
  user: null,// for user object
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;

      })
     .addCase(loginUser.fulfilled, (state,action) => {
        state.loading = true;
        state.user = action.payload;
        state.error = null;
        
     })
     .addCase(loginUser.rejected, (state,action) => {
        state.loading = false;
        state.user = null;
       console.log(action.error.message);
       if (action.error.message === "Request failed with status code 401") {
         state.error = "Access Denied! Invalid Credentials"
       }
       else {
         state.error= action.error.message
       }
        
    })
  }
})

export default userSlice.reducer