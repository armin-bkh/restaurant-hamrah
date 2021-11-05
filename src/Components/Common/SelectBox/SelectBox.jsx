import Select from "react-select";

const SelectBox = ({ options, name, formik, value, ...rest }) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#rdbdbdb",
      border: `none`,
      cursor: "pointer",
      fontSize: "15px",
      fontFamily: "Casablanca",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "#000",
        fontFamily: "Casablanca",
        cursor: "pointer",
        background: isSelected && "#b3b2b2",
      };
    },
  };

  const costumValue = (options, value) => {
    return options ? options.find((op) => op.value === value) : null;
  };

  return (
    <div
      className={`${
        options.some((op) => op.value === "همه")
          ? "w-full md:w-32 mb-5 md:mb-0"
          : "w-full mb-5"
      } mr-auto`}
    >
      <div className={`boxShadow rounded-md`}>
        <Select
          styles={colourStyles}
          name={name}
          options={options}
          value={costumValue(options, value)}
          {...rest}
        />
      </div>
      {!options.some((op) => op.value === "همه") &&
        formik.errors[name] &&
        formik.touched[name] && (
          <span className={`text-xs md:text-hg text-red-700 Dirooz mr-3`}>
            {formik.errors[name]}
          </span>
        )}
    </div>
  );
};

export default SelectBox;
