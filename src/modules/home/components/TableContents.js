import React from "react";
import { Link } from "react-router-dom";
import tableContent from "../../../styles/TableData.module.css";

const TableContents = ({ id, number, name, specie, sex, affi, dob }) => {
  return (
    <tr className={tableContent.table__content}>
      <td>{number}</td>{" "}
      <Link
        to={`/ele/${id}`}
        style={{ textDecoration: "none", color: "black" }}
        className='link__href'
      >
        <td>{name}</td>
      </Link>
      <td>{specie}</td>
      <td>{sex}</td>
      <td>{affi}</td>
      <td>{dob}</td>
    </tr>
  );
};

export default TableContents;
