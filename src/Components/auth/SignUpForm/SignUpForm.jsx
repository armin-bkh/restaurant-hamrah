import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthInput from "../../Common/AuthInput/AuthInput";

const SignUpForm = ({ history }) => {
  const [formValue, setFormValue] = useState({
    resName: "",
    resTel: "",
    resEmail: "",
    resPassword: "",
  });

  const changeHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <form
      className={`boxShadow p-5 rounded-3xl w-full md:max-w-lg lg:max-w-xl`}
      onSubmit={submitHandler}
    >
      <h1
        className={`text-blue-400 font-bold text-lg lg:text-4xl Casablanca mb-7 lg:mb-16`}
      >
        ثبت نام
      </h1>
      <AuthInput
        placeholder="نام رستوران"
        value={formValue.resName}
        onChange={changeHandler}
        name="resName"
        type="text"
      />
      <AuthInput
        placeholder="شماره تماس"
        value={formValue.resTel}
        onChange={changeHandler}
        name="resTel"
        type="text"
      />
      <AuthInput
        placeholder="آدرس الکترونیکی"
        value={formValue.resEmail}
        onChange={changeHandler}
        name="resEmail"
        type="email"
      />
      <AuthInput
        placeholder="پسورد"
        value={formValue.resPassword}
        onChange={changeHandler}
        name="resPassword"
        type="password"
      />

      <Link
        className={`text-sm text-blue-400 font-bold Casablanca`}
        to="/login"
      >
        ورود به رستوران من
      </Link>
      <button
        type="submit"
        className={`mt-9 lg:mt-14 -14 block w-full py-2 tracking-widest rounded-md Casablanca text-lg gradient text-white`}
      >
        ثبت
      </button>
    </form>
  );
};

export default SignUpForm;
