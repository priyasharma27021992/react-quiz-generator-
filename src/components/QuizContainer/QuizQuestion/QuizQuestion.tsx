import { SetStateAction, useState } from "react";
import { QUESTIONS_ARRAY } from "../../../utils/common";
import classnames from "classnames";

const QuizQuestion = () => {
  const [questions, setQuestions] = useState(QUESTIONS_ARRAY);
  const [answer, setAnswer] = useState("");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const onChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
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
        return { ...question, submitted: true, answerred: answer };
      return question;
    });
    setQuestions(newQuestions);
  };

  const activeQuestion = questions[activeQuestionIndex];

  const getOptionColor = (submitted, answerred, answer, value) => {
    if (submitted && answerred === answer && answer === value) {
      return "bg-green-500";
    }
    if (submitted && answerred !== answer && answer === value) {
      return "bg-yellow-500";
    }
    if (submitted && answerred !== answer && answerred === value) {
      return "bg-red-500";
    }
    return "";
  };

  return (
    <div>
      <h5>{activeQuestion?.question}</h5>
      <div onChange={onChangeHandler}>
        {activeQuestion?.options.map((option) => (
          <div
            className={classnames(
              "p-0.5",
              getOptionColor(
                activeQuestion.submitted,
                activeQuestion.answerred,
                activeQuestion.answer,
                option.value
              )
            )}
          >
            <input
              type="radio"
              value={option.value}
              checked={answer === option.value}
            />
            <span className="pl-2">{option.label}</span>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-2"
        onClick={submitAnswer}
      >
        Submit
      </button>
      <div className="">
        <button
          className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md my-2"
          onClick={getBackQuestion}
        >
          Back Question
        </button>
        <button
          className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md my-2 ml-2"
          onClick={getNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export { QuizQuestion };
