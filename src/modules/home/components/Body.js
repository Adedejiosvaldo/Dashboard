import { Input } from "@mui/material";
import React from "react";
import Style from "../../../styles/Body.module.css";

import InputSearch from "./InputSearch";
import TableData from "./TableData";
const Body = () => {
  return (
    <div className={Style.body}>
      <div className={Style.header__input}>
        <h3 className={Style.lazy}>All Elephants</h3>
        <InputSearch />
      </div>

      <TableData />
    </div>
  );
};

export default Body;
