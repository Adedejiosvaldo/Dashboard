import React, { useEffect, useState } from "react";
import TableContents from "./TableContents";
import Pagination from "../../../layout/Pagination";
import tableData from "../../../styles/TableData.module.css";
import getData from "../../../services/getApi";

import SkeletonLoop from "./Skeleton";

const TableData = () => {
  const [elephant, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(10);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const elephants = getData("elephants/asian").then((res) => {
      const allElephants = res.map((r, index) => ({
        ...r,
        i: index + 1,
      }));
      setLoading(true);
      setData(allElephants);
    });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const postLimit = elephant.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const x = true;
  const y = true;
  return (
    <div>
      <table className={tableData.table__width}>
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
          {postLimit.map((item) => (
            <TableContents
              id={item._id}
              key={item.index}
              name={item.name}
              number={item.i}
              specie={item.species}
              sex={item.sex}
              dob={item.dob}
              affi={item.affiliation}
            />
          ))}
        </tbody>
      </table>
      {Loading ? null : <SkeletonLoop />}
      <Pagination
        totalPostNumber={elephant.length}
        postPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default TableData;
