import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionReducer,
  },
});

export default store;
