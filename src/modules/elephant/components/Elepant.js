import React from "react";
import TitleBar from "../../../layout/TitleBar";
import elephantStyle from "../../../styles/Elepant.module.css";
import { MainBody } from "./MainBody";
const Elepant = () => {
  return (
    <div className={elephantStyle.elepant}>
      <TitleBar Heading='Acumen Digital Interview Task / ElephantForm > Elephant' />
      <MainBody />
    </div>
  );
};

export default Elepant;
