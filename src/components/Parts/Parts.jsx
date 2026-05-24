import { Link } from "react-router-dom";
import "./Parts.css";

const Lekcje = ({ działy }) => {
  return (
    <div className="all-parts-section" id="lekcje">
      {działy.map((dział, index) => (
        <Link to={`/dzial/${dział.name.replace(/\s+/g, "-")}`} key={dział.name}>
          <div className={`part-card`}>
            <h2 className="part-title">{dział.name}</h2>
            <p className="part-description">{dział.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Lekcje;
