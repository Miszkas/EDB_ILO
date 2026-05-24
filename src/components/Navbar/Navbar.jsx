import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Strona Główna
        </Link>
        <Link to="/lekcje" className="nav-link">
          Lekcje
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
