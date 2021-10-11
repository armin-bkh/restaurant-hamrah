import { useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const AuthInput = ({ type, formik, name, ...rest }) => {
    const [isShow, setIsShow] = useState(false);
    const [theType, setTheType] = useState(type);
    const inputRef = useRef();

    const changeTypeHandler = () =>{
        setIsShow(prevState => !prevState);
        if(theType === "text") setTheType('password')
        else setTheType("text")
        inputRef.current.focus();
    }

    return ( 
        <fieldset className={`flex flex-col`}>
        {formik.errors[name] && formik.touched[name] && (
        <span className={`text-xs md:text-hg text-red-700 Dirooz self-end mb-2`}>{formik.errors[name]}</span>
        )}
        <div  className={`relative`}>
        <input ref={inputRef} name={name} className={`w-full Casablanca px-3 border border-transparent focus:border-blue-500 py-1
         boxShadow mb-5 Dirooz bgLight rounded-md outline-none placeholder-gray-500`} type={theType} {...rest} />
         {
            type === "password" &&
         <span onClick={changeTypeHandler} className={`text-blue-400 absolute left-2 top-2 text-xl cursor-pointer`}>
            {!isShow ? <AiFillEye /> : <AiFillEyeInvisible />}
         </span>
         }
        </div>
        </fieldset>
     );
}
 
export default AuthInput;