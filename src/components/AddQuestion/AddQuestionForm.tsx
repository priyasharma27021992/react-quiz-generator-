import { useState } from "react";
import { Modal } from "../modal/Modal";

const AddQuestionForm = () => {
  const [openPopUp, setoOpenPopUp] = useState(false);
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  return (
    <Modal openModal={openPopUp} closeModal={() => setoOpenPopUp(false)}>
      <form action="">
        <input name="question" type="text" required />
        <div>
          <button onClick={addInput}></button>
          {arr.map((item, i) => {
            return (
              <input
                onChange={handleChange}
                value={item.value}
                key={i}
                type={item.type}
              />
            );
          })}
        </div>
        <button type="submit">Add Question</button>
      </form>
    </Modal>
  );
};

export { AddQuestionForm };
