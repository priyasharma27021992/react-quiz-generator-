import classNames from "classnames";

const Button = ({
  onClick,
  classes = "",
  btnName,
  color = "blue",
  type = "button",
}) => {
  const colosClasses = {
    blue: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    red: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    gray: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
    green:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  };
  return (
    <button
      className={classNames(colosClasses[color], "my-2", classes)}
      type={type}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export { Button };
