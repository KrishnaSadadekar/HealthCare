import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Leftbar.css"; // Importing the CSS for styling
const LeftBar = () => {
  return (
    <div className="left-content">
      <div className="navbar-header">
        <h1>Healthcare.</h1>
      </div>
      <article className="navbar-section">
        <h3 className="navbar-section-title">General</h3>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Dashboard
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/his" className={({ isActive }) => isActive ? "active" : ""}>
              History
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""}>
              Calendar
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/appoint" className={({ isActive }) => isActive ? "active" : ""}>
              Appointments
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/stats" className={({ isActive }) => isActive ? "active" : ""}>
              Statistics
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/tools" className={({ isActive }) => isActive ? "active" : ""}>
              Tools
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/chat" className={({ isActive }) => isActive ? "active" : ""}>
              Chat
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/support" className={({ isActive }) => isActive ? "active" : ""}>
              Support
            </NavLink>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default LeftBar;