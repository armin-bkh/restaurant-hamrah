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
    <div className={`boxShadow rounded-md ${options.length === 5 ? 'w-full md:w-32 mb-5 md:mb-0' : 'w-full mb-5'}`}>
      <Select
        styles={colourStyles}
        options={options}
        {...rest}
      />
    </div>
  );
};

export default SelectBox;
