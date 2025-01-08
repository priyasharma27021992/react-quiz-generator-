import { useState } from "react";
import { QUESTIONS_ARRAY, ANSWERS_ARRAY } from "../../../utils/common";

const QuizQuestion = () => {
  const [questions, setQuestions] = useState(QUESTIONS_ARRAY);
  const [answer, setAnswer] = useState("");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const onChangeHandler = (value) => {
    setAnswer(value);
  };

  const getNextQuestion = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1);
  };

  const getBackQuestion = () => {
    setActiveQuestionIndex(activeQuestionIndex - 1);
  };

  const submitAnswer = () => {
    const newQuestions = questions.map((question) => {
      if (question.id === activeQuestion.id)
        return { ...question, submitted: true };
      return question;
    });
    setQuestions(newQuestions);
  };

  const activeQuestion = questions[activeQuestionIndex];
  const isAnswerCorrect = activeQuestion.submitted
    ? ANSWERS_ARRAY.find((ele) => ele.id)?.answer === answer
    : "";
  return (
    <div>
      <h5>{activeQuestion?.question}</h5>
      <div onChange={(e) => onChangeHandler(e.target.value)}>
        {activeQuestion?.options.map((option) => (
          <div className="">
            <input
              type="radio"
              value={option.value}
              checked={answer === option.value}
            />
            {option.label}
          </div>
        ))}
      </div>
      <button onClick={submitAnswer}>Submit</button>
      <div>
        <button onClick={getBackQuestion}>Back Question</button>
        <button onClick={getNextQuestion}>Next Question</button>
      </div>
    </div>
  );
};

export { QuizQuestion };
