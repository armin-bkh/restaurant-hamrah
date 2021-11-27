import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "../../Common/AuthInput/AuthInput";
import { getAllPersonnel } from "../../../Services/getAllPersonnel";
import { getEmployee } from "../../../Services/getEmployee";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  userName: "",
  userPassword: "",
};

const validationSchema = Yup.object({
  userName: Yup.string().required("نام کاربری را وارد کنید"),
  userPassword: Yup.string().required("رمز ورود را وارد کنید"),
});

const LogInForm = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { data } = await getAllPersonnel();
      const index = data.findIndex(
        (em) => em.id === values.userPassword && em.name === values.userName
      );
      if (index) {
        const { data } = await getEmployee(index);
        localStorage.setItem("restaurantUser", JSON.stringify(data));
        navigate("/manage", { state: data });
      } else setError("حساب کاربری مورد نظر یافت نشد");
    } catch (err) {}
    // try{
    //   const { data } = await getAllPersonnel();
    //   if(data.find(em => em.id === formValue.userPassword && em.name === formValue.userName)){
    //     const { data } = await getEmployee(formValue.userPassword);
    //     localStorage.setItem('restaurantUser', JSON.stringify(data));
    //     navigate('/manage', { state: data })
    //   }
    // } catch(err) {}
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const [error, setError] = useState("");

  return (
    <form
      className={`boxShadow p-5 rounded-3xl w-full md:max-w-lg lg:max-w-xl`}
      onSubmit={formik.handleSubmit}
    >
      <h1
        className={`text-blue-400 font-bold text-lg  lg:text-4xl Casablanca mb-7 lg:mb-16`}
      >
        ورود
      </h1>
      <AuthInput
        formik={formik}
        placeholder="نام کاربری..."
        {...formik.getFieldProps("userName")}
        name="userName"
        type="text"
      />
      <AuthInput
        formik={formik}
        placeholder="کد ورود..."
        {...formik.getFieldProps("userPassword")}
        name="userPassword"
        type="password"
      />
      {error && (
        <p className={`text-sm text-red-700 Dirooz font-bold -mt-3 mb-5`}>
          {error}
        </p>
      )}
      <Link className={`text-green-600 text-lg font-bold Dirooz`} to="/signup">
        اکانت ندارم
      </Link>
      <button
        type="submit"
        className={`mt-9 lg:mt-14 block w-full py-2 rounded-md Casablanca tracking-widest text-lg  ${
          formik.isValid
            ? "gradient text-white"
            : "text-blue-400 border-2 border-blue-400 opacity-40"
        }`}
        disabled={!formik.isValid}
      >
        ورود
      </button>
    </form>
  );
};

export default LogInForm;
