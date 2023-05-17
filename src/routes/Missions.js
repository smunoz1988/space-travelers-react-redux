import { useSelector, useDispatch } from 'react-redux';
import '../styles/missions.css';
import { applyMission, leaveMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;
  const dispatch = useDispatch();

  const joinMission = (missionId) => {
    dispatch(applyMission({ missionId }));
  };

  const quitMission = (missionId) => {
    dispatch(leaveMission({ missionId }));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      {data.map((dat) => (
        <tbody key={dat.mission_id}>
          <tr>
            <td>{dat.mission_name}</td>
            <td>{dat.description}</td>
            {!dat.reserved ? (
              <td>Not a member</td>
            ) : (
              <td>ACTIVE MEMBER</td>
            )}
            <td>
              {!dat.reserved ? (
                <button type="button" key={dat.mission_id} onClick={() => joinMission(dat.mission_id)}>
                  Join Mission
                </button>
              ) : (
                <button type="button" key={dat.mission_id} onClick={() => quitMission(dat.mission_id)}>Leave</button>
              )}

            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
