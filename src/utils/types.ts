export type QuestionType = {
  id: string;
  question: string;
  options: { label: string; value: string }[];
  submitted: boolean;
  answerred: string;
  answer: string;
};
