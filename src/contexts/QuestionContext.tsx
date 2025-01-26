import { createContext, useState } from "react";
import { QUESTIONS_ARRAY } from "../utils/common";
import { questionType } from "../utils/types";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState<questionType[]>(QUESTIONS_ARRAY);
  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
