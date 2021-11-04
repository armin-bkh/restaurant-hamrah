import { useEffect, useState } from "react";

const ManageOffInput = ({ name, lbl, formik, values, ...rest }) => {
  const [off, setOff] = useState(0);
  useEffect(() => {
    setOff(
      formik.values.price - (formik.values.off * formik.values.price) / 100
    );
  }, [formik.values.off, formik.values.price]);
  return (
    <fieldset className={`mb-5 w-full z-10 flex-col justify-center items-start`}>
      <label className={`ml-3 text-sm md:text-lg`}>{lbl}: </label>
      <div dir="ltr" className={`flex justify-start items-center mt-3`}>
        <span>{formik.values.price ? formik.values.price : 0} - </span>
        <input
          name={name}
          className={`placeholder-gray-500 Casablanca focus:border-blue-500 border-transparent border
           bg-transparent text-sm px-3 w-12 mx-2 text-center py-2 rounded-md outline-none boxShadow`}
          type="text"
          placeholder="%"
          {...rest}
        />
        = {off} تومان
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <span className={`text-xs md:text-hg text-red-700 Dirooz mr-3`}>
          {formik.errors[name]}
        </span>
      )}
    </fieldset>
  );
};

export default ManageOffInput;
