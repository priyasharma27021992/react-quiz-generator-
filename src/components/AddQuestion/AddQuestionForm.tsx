import { useState } from "react";

const AddQuestionForm = () => {
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
  );
};

export { AddQuestionForm };
