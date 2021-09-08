import { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  { label: "کباب", value: "kebab" },
  { label: "خورشت", value: "khoresht" },
  { label: "پلو", value: "polo" },
  { label: "سالاد", value: "salad" },
];

const SelectBox = ({ value, onChange }) => {
  const [defValue, setDefValue] = useState("");

  useEffect(() => {
    setDefValue(value.value);
  }, [value]);

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#rdbdbdb",
      border: `none`,
      cursor: "pointer",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "#000",
        cursor: "pointer",
        background: isSelected && "#b3b2b2",
      };
    },
  };

  return (
    <div className={`boxShadow rounded-md mb-5`}>
      <Select
        placeholder="انتخاب کنید..."
        styles={colourStyles}
        options={options}
        value={defValue}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectBox;
