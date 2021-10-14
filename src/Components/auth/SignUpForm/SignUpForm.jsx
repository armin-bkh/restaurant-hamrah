import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import AuthInput from "../../Common/AuthInput/AuthInput";

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  resName: "",
  resTel: "",
  resEmail: "",
  resPassword: "",
};

const validationSchema = Yup.object({
  resName: Yup.string().required("نام رستوران را وارد کنید"),
  resTel: Yup.string()
    .required("خط ثابت رستوران را وارد کنید")
    .matches(/^([0-9]{11})+$/, "شماره وارد شده صحیح نمی باشد"),
  resEmail: Yup.string()
    .required("آدرس الکترونیکی را وارد کنید")
    .email("آدرس الکترونیکی وارد شده صحیح نمی باشد"),
  resPassword: Yup.string().required("رمز ورود را وارد کنید"),
});

const inputExplain = [
  "نام رستوران",
  "خط ثابت رستوران به همراه کد استان",
  "آدرس الکترونیکی رستوران",
  "رمز ورود رستوران",
];

const SignUpForm = ({ history }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
  });

  return (
    <form
      className={`boxShadow p-5 rounded-3xl w-full md:max-w-lg lg:max-w-xl`}
      onSubmit={formik.handleSubmit}
    >
      <h1
        className={`text-blue-400 font-bold text-lg lg:text-4xl Casablanca mb-7 lg:mb-16`}
      >
        ثبت نام
      </h1>
      <AuthInput
        formik={formik}
        placeholder="نام رستوران"
        {...formik.getFieldProps("resName")}
        name="resName"
        type="text"
        explain={inputExplain[0]}
      />
      <AuthInput
        formik={formik}
        placeholder="شماره تماس"
        {...formik.getFieldProps("resTel")}
        name="resTel"
        type="text"
        explain={inputExplain[1]}
      />
      <AuthInput
        formik={formik}
        placeholder="آدرس الکترونیکی"
        {...formik.getFieldProps("resEmail")}
        name="resEmail"
        type="email"
        explain={inputExplain[2]}
      />
      <AuthInput
        formik={formik}
        placeholder="پسورد"
        {...formik.getFieldProps("resPassword")}
        name="resPassword"
        type="password"
        explain={inputExplain[3]}
      />

      <Link
        className={`text-sm text-blue-400 font-bold Casablanca`}
        to="/login"
      >
        ورود به رستوران من
      </Link>
      <button
        type="submit"
        className={`mt-9 lg:mt-14 -14 block w-full py-2 tracking-widest rounded-md Casablanca text-lg ${
          formik.isValid
            ? "gradient text-white"
            : "text-blue-400 border-2 border-blue-400 opacity-40"
        }`}
        disabled={!formik.isValid}
      >
        ثبت
      </button>
    </form>
  );
};

export default SignUpForm;
