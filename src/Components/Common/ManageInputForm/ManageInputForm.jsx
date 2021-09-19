const ManageInputForm = ({ type, lbl, ...rest }) => {
  let returnValue = (
    <input
      placeholder={`${lbl}...`}
      className={`placeholder-gray-500 Casablanca focus:border-blue-500 border-transparent border
           bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md outline-none boxShadow`}
      type={type}
      {...rest}
    />
  );
  if (type === "textarea") {
    returnValue = (
      <textarea
        placeholder={`${lbl}...`}
        className={`placeholder-gray-500 Casablanca focus:border-blue-500 border-transparent 
          border bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md h-52
           outline-none boxShadow`}
        {...rest}
      ></textarea>
    );
  }

  if (type === "file") {
    returnValue = (
      <div className={`flex items-center`}>
        <input className={`sr-only`} id={lbl} type={type} {...rest} />
        <label
          className={`gradient text-white Casablanca px-5 py-1 cursor-pointer rounded-md`}
          htmlFor={lbl}
        >
          {lbl}
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
    </fieldset>
  );
};

export default ManageInputForm;
