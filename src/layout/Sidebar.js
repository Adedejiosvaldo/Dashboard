import React, { Fragment, useState, useEffect } from "react";
import sideBar from "../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { Box, Drawer } from "@mui/material";

import Avatar from "../Assets/Images/5b37e1572751046a99744b7c.png";

const Sidebar = () => {
  const [mobile, setMobile] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 790) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/*if Mobile or Desktop condition to render entirely different things */}
      {mobile ? (
        <div className={sideBar.sidebar}>
          <h5
            className={sideBar.clickOpen}
            onClick={() => setIsSideBarOpen(true)}
          >
            Click
          </h5>

          <Drawer
            anchor='left'
            open={isSideBarOpen}
            onClose={() => setIsSideBarOpen(false)}
          >
            <h5
              className={sideBar.clickClose}
              onClick={() => setIsSideBarOpen(false)}
            >
              X Close
            </h5>
            {/*Box */}

            <Box width={window.innerWidth}>
              <div className={sideBar.sidebar__avatar}>
                <img className={sideBar.sidebar__avatar} src={Avatar} alt='' />
              </div>
              <div className={sideBar.sidebar__texts}>
                <NavLink
                  end
                  to='/'
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#b9b9ff" : "#ffffff",
                    };
                  }}
                >
                  Home
                </NavLink>

                <NavLink
                  to='/ele/:id'
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#b9b9ff" : "#ffffff",
                    };
                  }}
                >
                  Elephant
                </NavLink>
              </div>
            </Box>
          </Drawer>
        </div>
      ) : (
        <div className={sideBar.sidebar}>
          <div className={sideBar.sidebar__avatar}>
            <img src={Avatar} alt='' />
          </div>
          <div className={sideBar.sidebar__texts}>
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
              to='/ele/:id'
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#b9b9ff" : "#ddddff" };
              }}
            >
              Elephant
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
