import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
    <div>
      <Link to="/" activeClassName="active-link link">Rockets</Link>
      <NavLink to="/Missions" className="link">Missions</NavLink>
      <NavLink to="/MyProfile" className="link">My Profile</NavLink>
    </div>
  </nav>
);

export default Navbar;
