import { useContext, useEffect, useState } from "react";
import { getEmployee } from "../../../Services/getEmployee";
import { putEmployee } from "../../../Services/putEmployee";
import ManageInputForm from "../../Common/ManageInputForm/ManageInputForm";
import { useToasts } from "react-toast-notifications";
import EditEmployeeLoadingSkelton from "../../LoadingSkeleton/EditEmployeeLoadingSkeleton/EditEmployeeLoadingSkeleton";
import UserJobContext from "../../../Context/UserJobContext";
import ManageAddFilter from "../../ManageAddFilter/ManageAddFilter";
import SelectBox from '../../Common/SelectBox/SelectBox';
import { getUserFilters } from "../../../Services/getuserFilters";

const EditEmployee = ({ history, match }) => {
  const [formValue, setFormValue] = useState(null);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(null);
  const [filter, setFilter] = useState("");
  const { addToast } = useToasts();
  const employeeID = match.params.id;
  const userJob = useContext(UserJobContext);

  useEffect(() => {
    if (userJob !== "مدیریت") {
      history.push("/manage");
      return;
    }
    const fetchEmployee = async () => {
      try {
        const employee = await getEmployee(employeeID);
        setFormValue(employee.data);
        const filters = await getUserFilters();
        setFilters(filters.data);
        setFilter(filters.data.filter(op => op.value === employee.data.job));
        console.log(filters.data.filter(op => op.value === employee.data.job));
      } catch (err) {
        setError(true);
        history.push("/manage/personnel");
      }
    };
    fetchEmployee();
  }, []);

  const changeHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const selectChangeHandler = (selectedOption) => {
    setFilter(selectedOption);
    setFormValue({
      ...formValue,
      job: selectedOption.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (formValue.name && formValue.id && formValue.tel && formValue.job) {
        await putEmployee(employeeID, formValue);
        addToast(`تغییرات با موفقییت انجام شد`, { appearance: "success" });
        history.push("/manage/personnel");
      } else addToast(`تمامی اطلاعات ضروری است`, { appearance: "error" });
    } catch (err) {
      setError(true);
      addToast(`مجددا تلاش کنید`, { appearance: "error" });
    }
  };

  return (
    <main className={`min-h-screen flex items-center justify-center p-5`}>
      <section
        className={`w-full boxShadow md:max-w-lg rounded-md lg:max-w-xl`}
      >
        {!formValue || !filters ? (
          <EditEmployeeLoadingSkelton />
        ) : (
          <>
            <ManageAddFilter setFilters={setFilters} type="personnel" />
            <form
              className={`p-5 flex flex-col Casablanca w-full`}
              onSubmit={submitHandler}
            >
              <h1 className={`text-blue-400 mb-10 text-3xl md:text-5xl`}>
                تغییر اطلاعات
              </h1>
              <ManageInputForm
                value={formValue.name}
                type="text"
                name="name"
                lbl="نام"
                onChange={changeHandler}
              />
              <ManageInputForm
                value={formValue.tel}
                type="text"
                name="tel"
                lbl="شماره تماس"
                onChange={changeHandler}
              />
              <fieldset>
                <label className={`ml-3 text-sm md:text-lg`}>وظیفه:</label>
                <SelectBox
                  value={filter}
                  onChange={selectChangeHandler}
                  placeholder="وظیفه..."
                  options={filters.filter((op) => op.value !== "همه")}
                />
              </fieldset>
              <ManageInputForm
                value={formValue.id}
                type="text"
                name="id"
                lbl="کد ملی"
                onChange={changeHandler}
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
