import React from "react";
import titleBar from "../styles/TitleBar.module.css";
const TitleBar = ({ Heading }) => {
  return (
    <div className={titleBar.titlebar__main}>
      <div className={titleBar.titlebar}>
        <h1>{Heading}</h1>
      </div>
    </div>
  );
};

export default TitleBar;
