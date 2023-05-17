import { useSelector } from 'react-redux';
import '../styles/missions.css';

const Missions = () => {
  const missionsData = useSelector((store) => store.mission);
  const data = missionsData.missions;

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
        <tbody key={dat[0].mission_id}>
          <tr>
            <td>{dat[0].mission_name}</td>
            <td>{dat[0].description}</td>
            <td>Not a member</td>
            <td><button type="button">Join Mission</button></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
