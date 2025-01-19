import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import { Button } from "../button/Button";
import { useQuestions } from "../../hooks/useQuestions/useQuestion";
import { questionType } from "../../utils/types";

type Option = {
  id: number;
  value: string;
  label: string;
  type?: string;
};

const AddQuestionForm = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const { questions, setQuestions } = useQuestions();

  const [options, setOptions] = useState<Option[]>([
    {
      type: "text",
      id: 1,
      value: "",
      label: "",
    },
    {
      type: "text",
      id: 2,
      value: "",
      label: "",
    },
  ]);

  const addInput = () => {
    setOptions((s) => {
      return [
        ...s,
        {
          id: s?.length + 1,
          type: "text",
          value: "",
          label: "",
        },
      ];
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: "label" | "value"
  ) => {
    const { value } = e.target;
    setOptions((prev) =>
      prev.map((opt, i) => (i === index ? { ...opt, [field]: value } : opt))
    );
  };

  const submitQuestion = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const questionText = form.question.value;
    const answer = form.answer.value;
    setQuestions((prev: questionType[]) => [
      ...prev,
      {
        id: String(prev.length + 1),
        question: questionText,
        options,
        submitted: false,
        answerred: "",
        answer,
      },
    ]);

    //reset the form
    setOptions([
      { type: "text", id: 1, value: "", label: "" },
      { type: "text", id: 2, value: "", label: "" },
    ]);
    form.reset();
    setOpenPopUp(false);
  };
  console.log("questions", questions);
  return (
    <div>
      <div className="flex justify-end my-2">
        <Button btnName="Add Question" onClick={() => setOpenPopUp(true)} />
      </div>

      <Modal openModal={openPopUp} closeModal={() => setOpenPopUp(false)}>
        <form onSubmit={submitQuestion}>
          <div>
            <label className="mr-2 text-gray-700 text-sm font-bold mb-2">
              Question
            </label>
            <input
              name="question"
              type="textarea"
              id="question"
              required
              placeholder="question"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <div className="flex justify-end">
              <Button btnName="Add Options" onClick={addInput} />
            </div>
            {options.map((option, index) => {
              return (
                <div className="flex gap-2 my-2" key={option.id}>
                  <div>
                    <label
                      htmlFor={`option-label-${option.id}`}
                      className="mr-2 text-gray-700 text-sm font-bold mb-2"
                    >
                      Option {index + 1} Label
                    </label>
                    <input
                      onChange={(e) => handleChange(e, index, "label")}
                      value={options[index].label}
                      id={`option-label-${option.id}`}
                      type={option.type}
                      placeholder={`Label ${index + 1}`}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="mr-2 text-gray-700 text-sm font-bold mb-2">
                      {`Option ${index + 1} Value`}
                    </label>
                    <input
                      onChange={(e) => handleChange(e, index, "value")}
                      value={options[index].value}
                      id={`option-label-${option.id}`}
                      type={option.type}
                      placeholder={`Value ${index + 1}`}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <label className="mr-2 text-gray-700 text-sm font-bold mb-2">
              Answer
            </label>
            {options.map((option) => (
              <div className="p-0.5" key={option.id}>
                <input
                  id={`answer-${option.id}`}
                  type="radio"
                  name="answer"
                  value={option.value}
                />
                <label htmlFor={`answer-${option.id}`} className="pl-2">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          <Button btnName="Submit Question" type="submit"></Button>
        </form>
      </Modal>
    </div>
  );
};

export { AddQuestionForm };
