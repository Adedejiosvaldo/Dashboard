import React from "react";
import "./Body.css";
import TableData from "./TableData";
const Body = () => {
  return (
    <div className='body'>
      <h3 className='lazy'>All Elephanys</h3>
      <TableData />
    </div>
  );
};

export default Body;
