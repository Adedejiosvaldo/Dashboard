import React from "react";
import Body from "./Body";
import TitleBar from "./TitleBar";
import "./Header.css";
const Header = () => {
  return (
    <div className='Header'>
      <TitleBar Heading='Acumen Digital Interview Task/Elephant Form' />
      <Body />
    </div>
  );
};

export default Header;
