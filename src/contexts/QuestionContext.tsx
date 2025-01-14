import { createContext, useState } from "react";
import { QUESTIONS_ARRAY } from "../utils/common";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState(QUESTIONS_ARRAY);
  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
