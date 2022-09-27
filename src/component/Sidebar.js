import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../Assets/5b37e1572751046a99744b7c.png";
const Sidebar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = "underline";

  return (
    <div className='sidebar'>
      <div className='sidebar__avatar'>
        <img src={Avatar} alt='' />
      </div>
      <div className='sidebar__texts'>
        <NavLink
          end
          to='/'
          style={({ isActive }) => {
            return { backgroundColor: isActive ? "#b9b9ff" : "#ddddff" };
          }}
        >
          Home
        </NavLink>

        <NavLink
          to='/ele'
          style={({ isActive }) => {
            return { backgroundColor: isActive ? "#b9b9ff" : "#ddddff" };
          }}
        >
          Elephant
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
