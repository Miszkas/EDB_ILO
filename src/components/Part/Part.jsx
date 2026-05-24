import { useParams } from "react-router-dom";
import { edbDatabase } from "../../../data/data";
import { Link } from "react-router-dom";

import "./Part.css";

const Part = () => {
  const { dzialName } = useParams();
  const partName = dzialName.replace(/-/g, " ");

  const partData = edbDatabase.find((lekcja) => lekcja.category === partName);
  const lekcje = edbDatabase.filter((lekcja) => lekcja.category === partName);

  return (
    <div className="part-page">
      <h1 id="part-title">{partName}</h1>
      <p id="part-description">{partData?.categoryDescription}</p>
      <div className="lessons-list">
        {lekcje.map((lekcja, index) => (
          <Link
            key={lekcja.id}
            className="lesson-card"
            to={`/dzial/${dzialName}/temat/${lekcja.title.replace(/\s+/g, "-")}`}
          >
            <h2 className="lesson-title">
              <span>{index + 1}.</span> {lekcja.title}
            </h2>
            <p className="lesson-description">{lekcja.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Part;
