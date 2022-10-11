import { Link } from "react-router-dom";
import paginationNumber from "../styles/pagination.module.css";
const Pagination = ({ totalPostNumber, postPerPage, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPostNumber / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className={paginationNumber.navbar}>
      <ul className={paginationNumber.ul}>
        {pageNumber.map((number) => (
          <li className={paginate.li}>
            <Link
              className={paginationNumber.a}
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
