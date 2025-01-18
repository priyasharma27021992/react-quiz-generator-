import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import { Button } from "../button/Button";
import { useQuestions } from "../../hooks/useQuestions/useQuestion";

const AddQuestionForm = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const { questions, setQuestions } = useQuestions();

  const [option, setOption] = useState([
    {
      type: "text",
      id: 1,
      value: "",
      label: "",
    },
  ]);

  const addInput = () => {
    setOption((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
          label: "",
        },
      ];
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    e.preventDefault();

    setOption((s) => {
      const newoption = s.slice();
      console.log("e?.target", e, "newoption", newoption);
      newoption[i].value = e?.target?.value;

      return newoption;
    });
  };

  const submitQuestion = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("inputs", event.target.question.value);
    setQuestions((prev) => [
      ...prev,
      {
        id: "1",
        question: event.target.question.value,
        options: option,
        submitted: false,
        answerred: "",
        answer: event.target.answer.value,
      },
    ]);
  };
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
            {option.map((item, i) => {
              return (
                <div className="flex gap-2 my-2">
                  <label className="mr-2 text-gray-700 text-sm font-bold mb-2">
                    {`Option ${i + 1}`}
                  </label>
                  <input
                    onChange={(e) => handleChange(e, i)}
                    value={item.value}
                    key={i}
                    type={item.type}
                    placeholder={`option${i + 1}`}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              );
            })}
          </div>
          <div>
            <label className="mr-2 text-gray-700 text-sm font-bold mb-2">
              Answer
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
          <Button btnName="Submit Question" type="submit"></Button>
        </form>
      </Modal>
    </div>
  );
};

export { AddQuestionForm };
