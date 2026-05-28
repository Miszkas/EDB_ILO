import "./BackArrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackArrow = ({ target }) => {
  return (
    <Link to={target} className="back-arrow">
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
  );
};

export default BackArrow;
