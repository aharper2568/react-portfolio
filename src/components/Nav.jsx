import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <ul className="container-fluid nav nav-tabs justify-content-between">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active link-info" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "nav-link active link-info" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active link-info" : "nav-link"}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active link-info" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
    </>
  );
}

export default NavTabs;
