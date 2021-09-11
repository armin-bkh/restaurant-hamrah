import { useEffect, useState } from "react";
import Select from "react-select";

const SelectBox = ({ options, ...rest  }) => {

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
    <div className={`boxShadow rounded-md mb-5 w-full ${options.length === 4 || 'md:w-52'}`}>
      <Select
        styles={colourStyles}
        options={options}
        {...rest}
      />
    </div>
  );
};

export default SelectBox;
