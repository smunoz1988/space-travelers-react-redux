import MissionProfile from '../Components/MissionProfile';
import DisplayRockets from '../Components/DisplayRockets';
import '../styles/myProfile.css';

const MyProfile = () => (
  <div className="joinContainer">
    <div>
      <h3>My Rockets</h3>
      <DisplayRockets />
    </div>
    <div>
      <h3>My Missions</h3>
      <MissionProfile />
    </div>
  </div>
);

export default MyProfile;
