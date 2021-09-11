const ManageInputForm = ({ type, lbl, ...rest }) => {
  return (
    <fieldset className={`mb-5 flex-col justify-center items-center w-full`}>
      <label className={`ml-3 text-sm md:text-lg`}>{lbl}: </label>
      {type === "textarea" ? (
        <textarea
          className={`bg-transparent mt-2 text-sm w-full px-3 py-2 rounded-md h-52 outline-none boxShadow`}
          {...rest}
        ></textarea>
      ) : (
        <input
          className={`bg-transparent mt-2 text-sm w-full ${type === 'file' || 'px-3 py-2 rounded-md outline-none boxShadow'}`}
          type={type}
          {...rest}
        />
      )}
    </fieldset>
  );
};

export default ManageInputForm;
