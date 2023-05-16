import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../media/planet.png';

const Navbar = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img src={logo} className="logo" alt="logo" />
      Space Travelers&apos; Hub
    </div>
    <div className="links-container">
      <NavLink to="/Rockets" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Rockets</NavLink>
      <NavLink to="/Missions" className={({ isActive }) => (isActive ? 'link-active line' : 'link line')}>Missions</NavLink>
      <NavLink to="/MyProfile" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>My Profile</NavLink>
    </div>
  </nav>
);

export default Navbar;
