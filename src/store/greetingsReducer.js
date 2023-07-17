import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchGreeting = createAsyncThunk('greet', async ()=> {
  const response = await axios.get("http://127.0.0.1:3000/api/v1/greetings");
  const greeting = response.data.greeting;
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
