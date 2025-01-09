import { useState } from "react";
import { QUESTIONS_ARRAY, ANSWERS_ARRAY } from "../../../utils/common";

const QuizQuestion = () => {
  const [questions, setQuestions] = useState(QUESTIONS_ARRAY);
  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const onChangeHandler = (e) => {
    setAnswer(e.target.value);
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
    const isCorrect = ANSWERS_ARRAY.find((ele) => ele.id)?.answer === answer;
    const submittedAnswer = submittedAnswers.find((ele) => {
      if (ele.id === activeQuestion.id) {
        return ele;
      }
    });
    if (submittedAnswer) {
      const newSubmittedAnswers = submittedAnswers?.map((c) => {
        if (c.id === activeQuestion.id) {
          return { c, isCorrect, answer };
        } else {
          return c;
        }
      });
      setSubmittedAnswers(newSubmittedAnswers);
    } else {
      const newSubmittedAnswers = [
        ...submittedAnswers,
        { ...activeQuestion, isCorrect, answer },
      ];
      console.log("newSubmittedAnswers", newSubmittedAnswers);
      setSubmittedAnswers(newSubmittedAnswers);
    }
    setQuestions(newQuestions);
  };

  const activeQuestion = questions[activeQuestionIndex];

  console.log(
    "sub",
    submittedAnswers,
    "activeQuestionIndex",
    activeQuestionIndex
  );
  return (
    <div>
      <h5>{activeQuestion?.question}</h5>
      <div onChange={onChangeHandler}>
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
        onClick={submitAnswer}
      >
        Submit
      </button>
      <div className="">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={getBackQuestion}
        >
          Back Question
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-2 ml-2"
          onClick={getNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export { QuizQuestion };
