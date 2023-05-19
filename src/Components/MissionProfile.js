import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { leaveMission } from '../redux/missions/missionsSlice';

const MissionProfile = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;
  const dispatch = useDispatch();

  const reservedMissions = data.filter((item) => item.reserved === true);

  const quitMission = (missionId) => {
    dispatch(leaveMission({ missionId }));
  };

  return (
    <>
      {reservedMissions.length > 0 ? (
        <table className="profile-table">
          <tbody>
            {reservedMissions.map((reserved) => (
              <tr key={reserved.mission_id}>
                <td>{reserved.mission_name}</td>
                <td>
                  <button
                    className="leaveBtn"
                    type="button"
                    onClick={() => quitMission(reserved.mission_id)}
                  >
                    Leave
                  </button>
                </td>
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
