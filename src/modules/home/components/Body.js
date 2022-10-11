import React from "react";
import Style from "../../../styles/Body.module.css";
import TableData from "./TableData";
const Body = () => {
  return (
    <div className={Style.body}>
      <h3 className={Style.lazy}>All Elephants</h3>
      <TableData />
    </div>
  );
};

export default Body;
