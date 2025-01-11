export type questionType = {
  id: string;
  question: string;
  options: [{ label: string; value: string }];
  submitted: boolean;
  answer: string;
};
