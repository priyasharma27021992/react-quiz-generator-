import { createContext, ReactNode, useState } from "react";
import { QUESTIONS_ARRAY } from "../utils/common";
import { QuestionType } from "../utils/types";

type QuestionContextType = {
  questions: QuestionType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
};

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] =
    useState<Array<QuestionType>>(QUESTIONS_ARRAY);
  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
