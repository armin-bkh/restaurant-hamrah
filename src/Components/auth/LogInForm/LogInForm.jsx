import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthInput from "../../Common/AuthInput/AuthInput";
import { getAllPersonnel } from '../../../Services/getAllPersonnel';
import { getEmployee } from '../../../Services/getEmployee';

const LogInForm = ({ history }) => {
  const [formValue, setFormValue] = useState({
    userName: "",
    userPassword: "",
  });

  const changeHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const { data } = await getAllPersonnel();
      if(data.find(em => em.id === formValue.userPassword && em.name === formValue.userName)){
        const { data } = await getEmployee(formValue.userPassword);
        localStorage.setItem('resaurantUser', JSON.stringify(data));
        history.push('/manage', { employee: data })
      }
    } catch(err) {}
  };

  return (
    <form className={`boxShadow p-5 rounded-3xl w-full md:max-w-lg lg:max-w-xl`} onSubmit={submitHandler}>
      <h1
        className={`text-blue-400 font-bold text-lg  lg:text-4xl Casablanca mb-7 lg:mb-16`}
      >
        ورود
      </h1>
      <AuthInput
        placeholder="نام کاربری..."
        value={formValue.userName}
        onChange={changeHandler}
        name="userName"
        type="text"
      />
      <AuthInput
        placeholder="کد ورود..."
        value={formValue.userPassword}
        onChange={changeHandler}
        name="userPassword"
        type="password"
      />

      <Link
        className={`text-blue-400 text-sm font-bold Casablanca`}
        to="/signup"
      >
        اکانت ندارم
      </Link>
      <button
        type="submit"
        className={`mt-9 lg:mt-14 block w-full py-2 rounded-md Casablanca tracking-widest text-lg gradient text-white`}
      >
        ورود
      </button>
    </form>
  );
};

export default withRouter(LogInForm);
