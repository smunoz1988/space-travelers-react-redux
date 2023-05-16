import { useSelector } from 'react-redux';

const Missions = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;
  console.log(data);

  return (
    <p>test</p>
  );
};

export default Missions;
