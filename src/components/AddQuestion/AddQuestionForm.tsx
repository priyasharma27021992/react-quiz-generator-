import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Button } from "../button/Button";

const AddQuestionForm = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  const [arr, setArr] = useState([
    {
      type: "text",
      id: 1,
      value: "",
    },
  ]);

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

  const handleChange = (e, i) => {
    e.preventDefault();

    setArr((s) => {
      const newArr = s.slice();
      console.log("e?.target", e, "newArr", newArr);
      newArr[i].value = e?.target?.value;

      return newArr;
    });
  };
  return (
    <div>
      <div className="flex justify-end my-2">
        <Button btnName="Add Question" onClick={() => setOpenPopUp(true)} />
      </div>

      <Modal openModal={openPopUp} closeModal={() => setOpenPopUp(false)}>
        <form action="">
          <div>
            <label className="mr-2 text-gray-700 text-sm font-bold mb-2">
              Question
            </label>
            <input
              name="question"
              type="textarea"
              required
              placeholder="question"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <div className="flex justify-end">
              <Button btnName="Add Options" onClick={addInput} />
            </div>
            {arr.map((item, i) => {
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
          <Button
            onClick={() => {}}
            btnName="Submit Question"
            type="submit"
          ></Button>
        </form>
      </Modal>
    </div>
  );
};

export { AddQuestionForm };
