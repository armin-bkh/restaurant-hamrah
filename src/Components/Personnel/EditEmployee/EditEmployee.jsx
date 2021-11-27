import { useContext, useEffect, useState } from "react";
import { getEmployee } from "../../../Services/getEmployee";
import { putEmployee } from "../../../Services/putEmployee";
import ManageInputForm from "../../Common/ManageInputForm/ManageInputForm";
import { useToasts } from "react-toast-notifications";
import EditEmployeeLoadingSkelton from "../../LoadingSkeleton/EditEmployeeLoadingSkeleton/EditEmployeeLoadingSkeleton";
import UserJobContext from "../../../Context/UserJobContext";
import ManageAddFilter from "../../ManageAddFilter/ManageAddFilter";
import SelectBox from "../../Common/SelectBox/SelectBox";
import { getUserFilters } from "../../../Services/getuserFilters";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAllPersonnel } from "../../../Services/getAllPersonnel";
import { useNavigate, useParams } from "react-router";

const validationSchema = Yup.object({
  name: Yup.string().required("نام فرد مورد نظر ضروری است"),
  tel: Yup.string()
    .required("شماره تماس فرد مورد نظر ضروری است")
    .matches(/^([0-9]{11})+$/, "شماره تماس اشتباه وارد شده است"),
  job: Yup.string().required("شغل فرد مورد نظر ضروری است"),
  id: Yup.string().required("کد ملی فرد مورد نظر ضروری است"),
});

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      await putEmployee(id, values);
      addToast(`تغییرات با موفقییت انجام شد`, { appearance: "success" });
      navigate("/manage/personnel", { replace: true });
    } catch (err) {
      setError(true);
      addToast(`مجددا تلاش کنید`, { appearance: "error" });
    }
  };
  const [formValue, setFormValue] = useState(null);
  const formik = useFormik({
    onSubmit,
    initialValues: formValue,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(null);
  const { addToast } = useToasts();
  const userJob = useContext(UserJobContext);

  useEffect(() => {
    if (userJob !== "مدیریت") {
      navigate("/manage");
      return;
    }
    const fetchEmployee = async () => {
      try {
        const { data } = await getAllPersonnel();
        const index = data.findIndex((item) => item.id === id);
        const employee = await getEmployee(index);
        setFormValue(employee.data);
        const filters = await getUserFilters();
        setFilters(filters.data);
      } catch (err) {
        setError(true);
        navigate("/manage/personnel");
      }
    };
    fetchEmployee();
  }, []);

  return (
    <main className={`min-h-screen flex items-center justify-center p-5`}>
      <section
        className={`w-full boxShadow md:max-w-lg rounded-md lg:max-w-xl`}
      >
        {!formik.values || !filters ? (
          <EditEmployeeLoadingSkelton />
        ) : (
          <>
            <ManageAddFilter setFilters={setFilters} type="personnel" />
            <form
              className={`p-5 flex flex-col Casablanca w-full`}
              onSubmit={formik.handleSubmit}
            >
              <h1 className={`text-blue-400 mb-10 text-3xl md:text-5xl`}>
                تغییر اطلاعات
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
                  value={formik.values.job}
                  onChange={(selectedOption) =>
                    formik.setFieldValue("job", selectedOption.value)
                  }
                  onBlur={() => formik.setFieldTouched("job", true)}
                  placeholder="وظیفه..."
                  options={filters.filter((op) => op.value !== "همه")}
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
             hover:bg-blue-400 rounded-md hover:text-white`}
                type="submit"
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

export default EditEmployee;
