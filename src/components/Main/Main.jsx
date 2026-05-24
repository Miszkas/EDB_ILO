import "./Main.css";
import { CATEGORIES } from "../../../data/categories";
import Parts from "../Parts/Parts.jsx";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main" id="główna">
        <h1 id="main-title">Witaj na kursie</h1>
        <h2 id="main-subtitle">
          <span className="main-highlight">E</span>dukacji{" "}
          <span className="main-highlight">D</span>la{" "}
          <span className="main-highlight">B</span>ezpieczeństwa
        </h2>

        <div className="main-course-stats">
          <div className="main-course-stat">5 działów</div>
          <div className="main-course-stat">27 lekcji</div>
          <div className="main-course-stat">81 zadań</div>
        </div>

        <button
          className="main-start-button"
          onClick={() => document.getElementById("lekcje").scrollIntoView()}
        >
          Rozpocznij Naukę
        </button>
      </div>
      <Parts działy={CATEGORIES} />
    </>
  );
};

export default Main;
