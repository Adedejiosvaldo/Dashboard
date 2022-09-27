import React, { useEffect, useState } from "react";
import TableContents from "./TableContents";
import { Pagination } from "@mui/material";
import "./TableData.css";
const TableData = ({ Number, Name, Specie, Sex, Affi, DOB }) => {
  const [elephant, setData] = useState([]);

  const gettingData = async () => {
    const result = await fetch(
      `http://acumen-elephantom.herokuapp.com/elephants/asian`
    );
    const fullData = await result.json();
    const { data } = fullData;
    setData(data);
  };

  useEffect(() => {
    gettingData();
  }, []);

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Specie</th>
            <th>Sex</th>
            <th>Affiliation</th>
            <th>DOB</th>
          </tr>
        </tbody>
        <tbody>
          {elephant.map((item) => (
            <TableContents
              key={item.id}
              Name={item.name}
              Number={0 + 1}
              Specie={item.species}
              Sex={item.sex}
              DOB={item.dob}
              Affi={item.affiliation}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "40px",
          alignItems: "center",
        }}
        count={7}
        color='secondary'
      />
    </div>
  );
};

export default TableData;
