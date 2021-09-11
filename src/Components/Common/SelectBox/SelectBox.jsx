import Select from "react-select";

const SelectBox = ({ options, ...rest }) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#rdbdbdb",
      border: `none`,
      cursor: "pointer",
      fontSize: '15px',
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
    <div
      className={`boxShadow rounded-md ${
        options.some(op => op.value === 'all') ? "w-full md:w-32 mb-5 md:mb-0" : "w-full mb-5"
      }`}
    >
      <Select styles={colourStyles} options={options} {...rest} />
    </div>
  );
};

export default SelectBox;
