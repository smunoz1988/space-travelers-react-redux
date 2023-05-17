import { useSelector } from 'react-redux';
import '../styles/missions.css';

const Missions = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;

  return (
    <div className="tableContainer">
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {data.map((dat) => (
          <tr key={dat[0].mission_id}>
            <td>{dat[0].mission_name}</td>
            <td>{dat[0].description}</td>
            <td>Not a member</td>
            <td><button type="button">Join Mission</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Missions;
