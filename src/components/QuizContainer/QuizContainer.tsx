import { AddQuestionForm } from "../AddQuestion/AddQuestionForm";
import { QuizQuestion } from "./QuizQuestion/QuizQuestion";

const QuizContainer = () => {
  return (
    <div className="max-w-[700px] mx-auto my-20">
      <AddQuestionForm />
      <h2 className="mb-3 font-bold text-xl">
        Well, so here is the quiz, select the right answer and click to next
        question after that?
      </h2>
      <QuizQuestion />
    </div>
  );
};

export { QuizContainer };
