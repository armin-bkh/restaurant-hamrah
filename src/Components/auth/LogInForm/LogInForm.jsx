import { useState } from "react";
import { Link } from "react-router-dom";
import AuthInput from "../../Common/AuthInput/AuthInput";

const LogInForm = ({ setExisting }) => {
  const [formValue, setFormValue] = useState({
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
  };

  return (
    <form className={`boxShadow p-5 rounded-3xl w-full md:max-w-lg lg:max-w-xl`} onSubmit={submitHandler}>
      <h1
        className={`text-blue-400 font-bold text-lg  lg:text-4xl Dirooz mb-7 lg:mb-16`}
      >
        ورود
      </h1>
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
        className={`text-blue-400 text-sm font-bold FPArsoo`}
        to="/auth"
        onClick={() => setExisting(false)}
      >
        اکانت ندارم
      </Link>
      <button
        type="submit"
        className={`mt-9 lg:mt-14 block w-full py-2 rounded-md FPArsoo text-lg gradient text-white`}
      >
        ورود
      </button>
    </form>
  );
};

export default LogInForm;
