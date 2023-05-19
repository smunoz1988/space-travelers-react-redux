import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;

  const reservedMissions = data.filter((item) => item.reserved === true);

  return (
    <>
      {reservedMissions.length > 0 ? (
        <table className="profile-table">
          <tbody>
            {reservedMissions.map((reserved) => (
              <tr key={reserved.mission_id}>
                <td>{reserved.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="profile-table">No missions assigned</p>
      )}
    </>
  );
};

export default MissionProfile;
