import { useEffect, useState } from "react";
import ManageInputForm from "../../Common/ManageInputForm/ManageInputForm";
import { useToasts } from "react-toast-notifications";
import { postEmployee } from "../../../Services/postEmployee";
import ManageAddFilter from "../../ManageAddFilter/ManageAddFilter";
import { getUserFilters } from "../../../Services/getuserFilters";
import SelectBox from "../../Common/SelectBox/SelectBox";
import EditEmployeeLoadingSkelton from "../../LoadingSkeleton/EditEmployeeLoadingSkeleton/EditEmployeeLoadingSkeleton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const initialValues = {
  name: "",
  tel: "",
  job: "",
  id: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("نام فرد مورد نظر ضروری است"),
  tel: Yup.string()
    .required("شماره تماس فرد مورد نظر ضروری است")
    .matches(/^([0-9]{11})+$/, "شماره تماس اشتباه وارد شده است"),
  job: Yup.string().required("شغل فرد مورد نظر ضروری است"),
  id: Yup.string().required("کد ملی فرد مورد نظر ضروری است"),
});

const AddEmployee = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      await postEmployee(values);
      addToast(`${values.name} به کادر پرسنل اضافه شد`, {
        appearance: "success",
      });
      navigate("/manage/personnel");
    } catch (err) {}
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
  });
  const [filters, setFilters] = useState(null);
  const { addToast } = useToasts();
  const { job } = useSelector((state) => state.user);

  useEffect(() => {
    if (job !== "مدیریت") {
      navigate("/manage");
      return;
    }
    const fetchUserFilters = async () => {
      const { data } = await getUserFilters();
      setFilters(data);
    };
    fetchUserFilters();

    return () => {
      setFilters(null);
    };
  }, []);

  return (
    <main className={`min-h-screen flex items-center justify-center p-5`}>
      <section
        className={`w-full boxShadow md:max-w-lg rounded-md lg:max-w-xl`}
      >
        {!filters ? (
          <EditEmployeeLoadingSkelton />
        ) : (
          <>
            <ManageAddFilter setFilters={setFilters} type="personnel" />
            <form
              className={`p-5 flex flex-col Casablanca w-full`}
              onSubmit={formik.handleSubmit}
            >
              <h1 className={`text-blue-400 mb-10 text-3xl md:text-5xl`}>
                افزودن به کادر
              </h1>
              <ManageInputForm
                formik={formik}
                type="text"
                name="name"
                lbl="نام"
                {...formik.getFieldProps("name")}
              />
              <ManageInputForm
                formik={formik}
                type="text"
                name="tel"
                lbl="شماره تماس"
                {...formik.getFieldProps("tel")}
              />
              <fieldset>
                <label className={`ml-3 text-sm md:text-lg`}>وظیفه:</label>
                <SelectBox
                  formik={formik}
                  name="job"
                  value={formik.values.job}
                  options={filters.filter((op) => op.value !== "همه")}
                  placeholder="وظیفه..."
                  onChange={(selectedOption) =>
                    formik.setFieldValue("job", selectedOption.value)
                  }
                  onBlur={() => formik.setFieldTouched("job", true)}
                />
              </fieldset>
              <ManageInputForm
                formik={formik}
                type="text"
                name="id"
                lbl="کد ملی"
                {...formik.getFieldProps("id")}
              />

              <button
                className={`py-2 border border-blue-400 text-blue-400 transition
              rounded-md  ${
                formik.isValid
                  ? "hover:text-white hover:bg-blue-400"
                  : "opacity-40"
              }`}
                type="submit"
                disabled={!formik.isValid}
              >
                ثبت
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
};

export default AddEmployee;
