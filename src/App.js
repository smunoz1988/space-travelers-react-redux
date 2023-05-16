import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import { getRockets } from './redux/rockets/rocketsSlice';

function App() {
  //  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

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
