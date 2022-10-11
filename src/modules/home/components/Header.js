import React from "react";
import Body from "./Body";
import TitleBar from "../../../layout/TitleBar";

import headerStyle from "../../../styles/Header.module.css";
const Header = () => {
  return (
    <div className={headerStyle.Header}>
      <TitleBar Heading='Acumen Digital Interview Task/Elephant Form' />
      <Body />
    </div>
  );
};

export default Header;
