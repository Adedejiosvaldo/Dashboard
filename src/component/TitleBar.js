import React from "react";
import "./TitleBar.css";
const TitleBar = ({ Heading }) => {
  return (
    <div className='titlebar__main'>
      <div className='titlebar'>
        <h1>{Heading}</h1>
      </div>
    </div>
  );
};

export default TitleBar;
