import { useSelector, useDispatch } from 'react-redux';
import '../styles/missions.css';
import { applyMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;
  const dispatch = useDispatch();

  const joinMission = (missionId) => {
    dispatch(applyMission({ missionId }));
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
            <td>Not a member</td>
            <td>
              {!dat.reserved ? (
                <button type="button" key={dat.mission_id} onClick={() => joinMission(dat.mission_id)}>
                  Join Mission
                </button>
              ) : (
                <button type="button">Leave</button>
              )}

            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
