import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios(url);
      return resp.data.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        description: item.description,
        images: item.flickr_images[0],
      }));
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => {
      const id = payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        //  if (rocket.reserved === true) return { ...rocket, reserved: false };
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export default rocketsSlice.reducer;

export const { reserveRocket } = rocketsSlice.actions;
