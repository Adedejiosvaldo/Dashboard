import React from "react";
import TitleBar from "./TitleBar";
import "./Elepant.css";
import { MainBody } from "./MainBody";
const Elepant = () => {
  return (
    <div className='elepant'>
      <TitleBar Heading='Acumen Digital Interview Task /ElephantForm > Elephant' />
      <MainBody />
    </div>
  );
};

export default Elepant;
