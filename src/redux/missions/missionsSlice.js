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
  .then((response) => response.data.flatMap((name) => ({
    mission_id: name.mission_id,
    mission_name: name.mission_name,
    description: name.description,
  }))));

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    applyMission: (state, action) => {
      const { missionId } = action.payload;
      const missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, missions };
    },
    leaveMission: (state, action) => {
      const { missionId } = action.payload;
      const missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, missions };
    },
  },
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

export const { applyMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
