import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  console.log(missionsData, data);

  return (
    <p>test</p>
  );
};

export default Missions;
