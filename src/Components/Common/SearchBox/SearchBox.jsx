import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={`relative`}>
      <input
        className={`outline-none Casablanca px-3 py-2 w-full md:w-62 rounded-md mb-5 md:mb-0 bgLight boxShadow`}
        type="text"
        placeholder="جتسجو..."
        value={value}
        onChange={changeHandler}
      />
      <span className={`absolute text-blue-400 left-1 top-3`}>
        <RiSearch2Line />
      </span>
    </div>
  );
};

export default SearchBox;