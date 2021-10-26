import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      onAdd(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={submitHandler} className={`flex`}>
      <input
        className={`bg-opacity-90 filter backdrop-blur-md flex-grow px-3 py-2 Casablanca rounded-md bg-gray-300 outline-none border-none shadow-lg`}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="برنامتو بنویس..."
      />
      <button
        type="submit"
        className={`bg-opacity-90 filter backdrop-blur-md px-5 py-2 bg-blue-400 rounded-md text-white text-2xl mr-2`}
      >
        <BiPlus />
      </button>
    </form>
  );
};

export default TodoForm;
