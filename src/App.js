import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './Components/NavBar';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import { getRockets } from './redux/rockets/rocketsSlice';
import { getMissions } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    dispatch(getRockets());
  });

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="Rockets" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="Myprofile" element={<MyProfile />} />
        <Route path="/" element={<Navigate to="/Rockets" />} />
      </Routes>
    </>
  );
}

export default App;
