import React from "react";
import { NavLink } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="left-content">
      <article>
        <h3>General</h3>
        <ul>
          <li>
            <NavLink to={"/"}>
              <h1>Dashboard</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/his"}>History</NavLink>
          </li>
          <li>
            <NavLink to={"/cal"}>Calender</NavLink>
          </li>
          <li>
            <NavLink to={"/appoint"}>Appointments</NavLink>
          </li>
          <li>
            <NavLink to={"/stats"}>Statistics</NavLink>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default LeftBar;
