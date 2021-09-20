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
        className={`sr-only w-full h-full`}
        type="radio"
        checked={checked}
        value={value}
        onChange={onChange}
        name={name}
      />
      <label
        className={`text-xs md:text-sm flex justify-center cursor-pointer items-center px-4 py-1
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
