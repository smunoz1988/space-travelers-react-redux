import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';

export const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
