import { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";

export const useQuestions = () => {
  return useContext(QuestionContext);
};
