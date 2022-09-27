import React from "react";

import "./TableData.css";

const TableContents = ({ Number, Name, Specie, Sex, Affi, DOB }) => {
  return (
    <tr className='table__content'>
      <td>{Number}</td>
      <td>{Name}</td>
      <td>{Specie}</td>
      <td>{Sex}</td>
      <td>{Affi}</td>
      <td>{DOB}</td>
    </tr>
  );
};

export default TableContents;
