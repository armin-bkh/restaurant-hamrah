const ManageInputForm = ({ type, lbl, ...rest }) => {
  return (
    <fieldset className={`mb-5 flex-col justify-center items-center w-full`}>
      <label className={`ml-3 text-sm md:text-lg`}>{lbl}: </label>
      {type === "textarea" ? (
        <textarea
          placeholder={`${lbl}...`}
          className={`placeholder-gray-500 Casablanca focus:border-blue-500 border-transparent 
          border bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md h-52
           outline-none boxShadow`}
          {...rest}
        ></textarea>
      ) : (
        <input
          placeholder={`${lbl}...`}
          className={`placeholder-gray-500 Casablanca focus:border-blue-500 border-transparent border
           bg-transparent mt-2 text-sm w-full ${
            type === "file" || "px-3 py-2 rounded-md outline-none boxShadow"
          }`}
          type={type}
          {...rest}
        />
      )}
    </fieldset>
  );
};

export default ManageInputForm;
