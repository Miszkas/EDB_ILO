import "./Temat.css";
import { useParams } from "react-router-dom";

const Temat = () => {
  const { dzialName, tematName } = useParams();
  const decodedDzialName = dzialName.replace(/-/g, " ");
  const decodedTematName = tematName.replace(/-/g, " ");
  return (
    <div className="temat">
      <h2>{decodedTematName}</h2>
    </div>
  );
};

export default Temat;
