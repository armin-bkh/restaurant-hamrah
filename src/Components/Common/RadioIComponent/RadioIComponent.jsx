import { useState, useEffect } from "react";

const RadioIComponent = ({ onChange, value, name, filterCur }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (filterCur === value) {
      setChecked(true);
    } else setChecked(false);
  }, [filterCur, value]);

  return (
    <div className={`text-black relative text-sm ml-2`}>
      <input
        id={value}
        className={`sr-only`}
        type="radio"
        checked={checked}
        value={value}
        onChange={onChange}
        name={name}
      />
      <label
        className={`text-xs md:text-sm flex items-center w-16 h-6 md:w-24 md:h-8 justify-center cursor-pointer
         ANoor rounded-full bgLight ${
           checked ? "boxShadowInner" : "boxShadow"
         }`}
        htmlFor={value}
      >
        {value}
      </label>
    </div>
  );
};

export default RadioIComponent;
