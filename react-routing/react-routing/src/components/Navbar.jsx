import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // ✅ Add this import
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* If the '/' route is opened in the backend/server then isActive is true for the route */}
          {/* Through Navlink we can use the className tag  */}
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({ isActive }) => isActive ? "active-link" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
