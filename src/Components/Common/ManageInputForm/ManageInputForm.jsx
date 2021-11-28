const ManageInputForm = ({ type, lbl, value, formik, name, ...rest }) => {
  let returnValue = (
    <input
      placeholder={`${lbl}...`}
      className={`placeholder-gray-500 Casablanca focus:border-blue-500 border-transparent border
           bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md outline-none boxShadow`}
      type={type}
      name={name}
      value={value}
      {...rest}
    />
  );

  if (type === "textarea") {
    returnValue = (
      <textarea
        placeholder={`${lbl}...`}
        name={name}
        className={`placeholder-gray-500 Casablanca focus:border-blue-500 border-transparent 
          border bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md h-52
           outline-none boxShadow`}
        value={value}
        {...rest}
      ></textarea>
    );
  }

  if (type === "file") {
    returnValue = (
      <div className={`flex items-center`} style={{ zIndex: "-1" }}>
        <input
          className={`sr-only`}
          id={lbl}
          type={type}
          name={name}
          {...rest}
        />
        <label
          className={`gradient text-white Casablanca px-5 py-1 cursor-pointer rounded-md`}
          htmlFor={lbl}
        >
          {value ? value.name : lbl}
        </label>
      </div>
    );
  }

  return (
    <fieldset
      className={`mb-5 w-full ${
        type === "file"
          ? "flex items-center"
          : "flex-col justify-center items-start"
      }`}
    >
      <label className={`ml-3 text-sm md:text-lg`}>{lbl}: </label>
      {returnValue}
      {formik.errors[name] && formik.touched[name] && (
        <span className={`text-xs md:text-hg text-red-700 Dirooz mr-3`}>
          {formik.errors[name]}
        </span>
      )}
    </fieldset>
  );
};

export default ManageInputForm;
