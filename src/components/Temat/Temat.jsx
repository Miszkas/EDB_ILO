import "./Temat.css";
import { useParams } from "react-router-dom";
import BackArrow from "../BackArrow/BackArrow";
import { edbDatabase } from "../../../data/data";

const renderContent = (block, index) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={index} className="subheading">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={index} className="paragraph">
          {block.text}
        </p>
      );
    case "alert":
      return (
        <div key={index} className="alert">
          {block.text}
        </div>
      );
    default:
      return null;
  }
};

const renderQuiz = (quiz, index) => {
  return (
    <div key={index} className="quiz">
      <h3 className="quiz-question">{quiz.question}</h3>
      <ul className="quiz-options">
        {quiz.options.map((option, idx) => (
          <li key={idx} className="quiz-option">
            <input
              type="radio"
              id={`option-${index}-${idx}`}
              name={`quiz-${index}`}
              value={option}
            />
            <label htmlFor={`option-${index}-${idx}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Temat = () => {
  const { dzialName, tematName } = useParams();
  const decodedDzialName = dzialName.replace(/-/g, " ");
  const decodedTematName = tematName.replace(/-/g, " ");

  const tematData = edbDatabase.find(
    (lekcja) =>
      lekcja.category === decodedDzialName && lekcja.title === decodedTematName,
  );

  const checkQuizAnswers = () => {
    console.log("Sprawdzanie odpowiedzi quizu...");
  };

  return (
    <div className="temat">
      <BackArrow target={`/dzial/${dzialName}`} />
      <h1 className="heading">{decodedTematName}</h1>

      <div className="temat-content">
        {tematData?.blocks?.map((block, index) => renderContent(block, index))}

        <h2 className="subheading quiz-heading">Sprawdź swoją wiedzę</h2>
        {tematData?.quiz?.map((quiz, index) => renderQuiz(quiz, index))}
        <button className="quiz-submit" onClick={checkQuizAnswers}>
          Sprawdź odpowiedzi
        </button>
      </div>
    </div>
  );
};

export default Temat;
