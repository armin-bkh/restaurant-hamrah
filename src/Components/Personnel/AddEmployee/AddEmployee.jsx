import { useContext, useEffect, useState } from "react";
import ManageInputForm from "../../Common/ManageInputForm/ManageInputForm";
import { useToasts } from "react-toast-notifications";
import { postEmployee } from "../../../Services/postEmployee";
import UserJobContext from "../../../Context/UserJobContext";
import ManageAddFilter from "../../ManageAddFilter/ManageAddFilter";
import { getUserFilters } from "../../../Services/getUserFilters";
import SelectBox from "../../Common/SelectBox/SelectBox";
import EditEmployeeLoadingSkelton from "../../LoadingSkeleton/EditEmployeeLoadingSkeleton/EditEmployeeLoadingSkeleton";
// hi armin
const AddEmployee = ({ history }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    tel: "",
    job: "",
    id: "",
  });
  //asdfsf
  const [filters, setFilters] = useState(null);
  const [filter, setFilter] = useState("");
  const { addToast } = useToasts();
  const userJob = useContext(UserJobContext);

  useEffect(() => {
    if (userJob !== "مدیریت") {
      history.push("/manage");
      return;
    }
    const fetchUserFilters = async () => {
      const { data } = await getUserFilters();
      setFilters(data);
    };
    fetchUserFilters();
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
      if (formValue.id && formValue.job && formValue.name && formValue.tel) {
        await postEmployee(formValue);
        addToast(`${formValue.name} به کادر پرسنل اضافه شد`, {
          appearance: "success",
        });
        history.push("/manage/personnel");
      } else addToast("تمامیه اطلاعات الزامی است", { appearance: "error" });
    } catch (err) {}
  };

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
              onSubmit={submitHandler}
            >
              <h1 className={`text-blue-400 mb-10 text-3xl md:text-5xl`}>
                افزودن به کادر
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
                  options={filters.filter((op) => op.value !== "همه")}
                  placeholder="وظیفه..."
                  onChange={selectChangeHandler}
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

export default AddEmployee;
