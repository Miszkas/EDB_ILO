import "./Temat.css";
import { useParams } from "react-router-dom";
import BackArrow from "../BackArrow/BackArrow";
import { edbDatabase } from "../../../data/data";
import { useState } from "react";

const Temat = () => {
  const { dzialName, tematName } = useParams();
  const decodedDzialName = dzialName.replace(/-/g, " ");
  const decodedTematName = tematName.replace(/-/g, " ");

  const [quizAnswers, setQuizAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tematData = edbDatabase.find(
    (lekcja) =>
      lekcja.category === decodedDzialName && lekcja.title === decodedTematName,
  );

  const checkQuizAnswers = () => {
    const totalQuestions = tematData?.quiz?.length || 0;
    if (Object.keys(quizAnswers).length < totalQuestions) {
      alert("Proszę odpowiedzieć na wszystkie pytania przed sprawdzeniem!");
      return;
    }

    setIsSubmitted(true);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setIsSubmitted(false);
  };

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

  const renderQuiz = (quiz, quizIdx) => {
    return (
      <div key={quizIdx} className="quiz">
        <h3 className="quiz-question">{quiz.question}</h3>
        <ul className="quiz-options">
          {quiz.options.map((option, optIdx) => {
            const isSelected = quizAnswers[quizIdx] === option;
            const isCorrect = quiz.correctAnswer === option;

            let optionClass = "quiz-option";
            if (isSubmitted) {
              if (isCorrect) {
                optionClass += " correct";
              } else if (isSelected && !isCorrect) {
                optionClass += " incorrect";
              } else {
                optionClass += " disabled";
              }
            }

            return (
              <li key={optIdx} className={optionClass}>
                <input
                  type="radio"
                  id={`option-${quizIdx}-${optIdx}`}
                  name={`quiz-${quizIdx}`}
                  value={option}
                  checked={isSelected}
                  disabled={isSubmitted}
                  onChange={() =>
                    setQuizAnswers((prev) => ({ ...prev, [quizIdx]: option }))
                  }
                />
                <label htmlFor={`option-${quizIdx}-${optIdx}`}>{option}</label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="temat">
      <BackArrow target={`/dzial/${dzialName}`} />
      <h1 className="heading">{decodedTematName}</h1>

      <div className="temat-content">
        {tematData?.blocks?.map((block, index) => renderContent(block, index))}

        <h2 className="subheading quiz-heading">Sprawdź swoją wiedzę</h2>
        {tematData?.quiz?.map((quiz, index) => renderQuiz(quiz, index))}

        {!isSubmitted ? (
          <button className="quiz-submit" onClick={checkQuizAnswers}>
            Sprawdź odpowiedzi
          </button>
        ) : (
          <button className="quiz-reset" onClick={handleResetQuiz}>
            Spróbuj ponownie
          </button>
        )}
      </div>
    </div>
  );
};

export default Temat;
