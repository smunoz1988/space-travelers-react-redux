import { useSelector } from 'react-redux';

const Missions = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;

  return (
    <>
      {data.map((dat) => (
        <p key={dat[0].mission_id}>{dat[0].mission_name}</p>
      ))}
      <p>test</p>
    </>
  );
};

export default Missions;
