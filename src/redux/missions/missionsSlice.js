import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const getMissions = createAsyncThunk('mission/getMissions', () => axios
  .get(url)
  .then((response) => response.data));

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.missions = action.payload;
      state.error = '';
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.loading = false;
      state.missions = [];
      state.error = action.error.message;
    });
  },
});

export default missionSlice.reducer;
