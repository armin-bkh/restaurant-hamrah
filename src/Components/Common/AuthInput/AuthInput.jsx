import { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AuthInput = ({ type, formik, name, explain, ...rest }) => {
  const [isShow, setIsShow] = useState(false);
  const [theType, setTheType] = useState(type);
  const inputRef = useRef();

  const changeTypeHandler = () => {
    setIsShow((prevState) => !prevState);
    if (theType === "text") setTheType("password");
    else setTheType("text");
    inputRef.current.focus();
  };

  return (
    <fieldset className={`flex flex-col mb-5`}>
      <div className={`relative`}>
        <input
          ref={inputRef}
          name={name}
          className={`w-full Casablanca px-3 border border-transparent focus:border-blue-500 py-1
         boxShadow Dirooz bgLight rounded-md outline-none placeholder-gray-500`}
          type={theType}
          {...rest}
        />
        {type === "password" && (
          <span
            onClick={changeTypeHandler}
            className={`text-blue-400 absolute left-2 top-2 text-xl cursor-pointer`}
          >
            {!isShow ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        )}
      </div>
      {explain || formik.errors[name] ? (
        <div className={`text-xs md:text-sm flex items-center justify-between mt-1`}>
          <span className={`text-gray-400 Dirooz  mr-3`}>
            {explain}
          </span>
          {formik.errors[name] && formik.touched[name] && (
            <span className={`text-red-700 Dirooz`}>
              {formik.errors[name]}
            </span>
          )}
        </div> 
      ) : null}
    </fieldset>
  );
};

export default AuthInput;
