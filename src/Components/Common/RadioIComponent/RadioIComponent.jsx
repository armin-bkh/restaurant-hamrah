import { useState, useEffect } from "react";

const RadioIComponent = ({ onChange, filterState, filterValue, lbl }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (filterState === filterValue) {
      setChecked(true);
    } else setChecked(false);
  }, [filterState, filterValue]);

  return (
    <div className={`text-black relative text-sm ml-2`}>
      <input
        id={filterValue}
        className={`sr-only w-full h-full`}
        type="radio"
        checked={filterState === filterValue && true}
        value={filterValue}
        onChange={onChange}
      />
      <label
        className={`flex justify-center cursor-pointer items-center px-4 py-1
         ANoor rounded-full bgLight ${
           checked ? "boxShadowInner" : "boxShadow"
         }`}
        htmlFor={filterValue}
      >
        {lbl}
      </label>
    </div>
  );
};

export default RadioIComponent;
