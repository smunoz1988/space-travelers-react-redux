import React from 'react';
// import { Counter } from './features/counter/Counter';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';

function App() {
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
