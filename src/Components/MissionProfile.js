import { useSelector } from 'react-redux';
import '../styles/missionProfile.css';

const MissionProfile = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;

  const reservedMissions = data.filter((item) => item.reserved === true);

  if (reservedMissions.length > 0) {
    return (
      <ul>
        {reservedMissions.map((reserved) => (
          <li key={reserved.mission_id}>{reserved.mission_name}</li>
        ))}
      </ul>
    );
  }

  return (
    <p>No missions assigned</p>
  );
};

export default MissionProfile;
