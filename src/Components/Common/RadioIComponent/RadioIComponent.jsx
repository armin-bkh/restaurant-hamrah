import { useState, useEffect } from "react";

const RadioIComponent = ({ onChange, filterState, filtervalue, lbl }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (filterState === filtervalue) {
      setChecked(true);
    } else setChecked(false);
  }, [filterState, filtervalue]);

  return (
    <div className={`text-black relative text-sm py-1 w-14 ml-2`}>
      <input
        id={filtervalue}
        className={`sr-only w-full h-full`}
        type="radio"
        checked={filterState === filtervalue && true}
        value={filtervalue}
        onChange={onChange}
      />
      <label
        className={`flex justify-center cursor-pointer items-center w-full
         ANoor h-full rounded-full bgLight ${
           checked ? "boxShadowInner" : "boxShadow"
         }`}
        htmlFor={filtervalue}
      >
        {lbl}
      </label>
    </div>
  );
};

export default RadioIComponent;
