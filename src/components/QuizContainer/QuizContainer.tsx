import { QuizQuestion } from "./QuizQuestion/QuizQuestion";

const QuizContainer = () => {
  return (
    <div>
      <h3>
        Well, so here is the quiz, select the right answer and click to next
        question after that
      </h3>
      <QuizQuestion />
    </div>
  );
};

export { QuizContainer };
