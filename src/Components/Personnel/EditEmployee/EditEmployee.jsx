import { useEffect, useState } from "react";
import { getEmployee } from "../../../Services/getEmployee";
import { putEmployee } from "../../../Services/putEmployee";
import ManageInputForm from "../../Common/ManageInputForm/ManageInputForm";
import { useToasts } from "react-toast-notifications";
import EditEmployeeLoadingSkelton from "../../LoadingSkeleton/EditEmployeeLoadingSkeleton/EditEmployeeLoadingSkeleton";

const EditEmployee = ({ history, match }) => {
  const [formValue, setFormValue] = useState(null);
  const [error, setError] = useState(false);
  const { addToast } = useToasts();
  const employeeID = match.params.id;

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await getEmployee(employeeID);
        setFormValue(data);
      } catch (err) {
        setError(true);
        history.push('/manage/personnel')
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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        if(formValue.name && formValue.id && formValue.tel && formValue.job){
            await putEmployee(employeeID, formValue);
            addToast(`تغییرات با موفقییت انجام شد`, {appearance: 'success'})
            history.push('/manage/personnel');
        } else addToast(`تمامی اطلاعات ضروری است`, {appearance: 'error'})
    } catch (err){
        setError(true)
        addToast(`مجددا تلاش کنید`, {appearance: 'error'})
    }
  };

  return (
    <main className={`min-h-screen flex items-center justify-center p-5`}>
      <section className={`w-full md:max-w-lg lg:max-w-xl`}>
        {!formValue ? (
          <EditEmployeeLoadingSkelton />
        ) : (
          <form
            className={`p-5 boxShadow flex flex-col Casablanca rounded-md w-full`}
            onSubmit={submitHandler}
          >
            <h1 className={`text-blue-400 mb-10 text-3xl md:text-5xl`}>تغییر اطلاعات</h1>
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
            <ManageInputForm
              value={formValue.job}
              type="text"
              name="job"
              lbl="وظیفه"
              onChange={changeHandler}
            />
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
        )}
      </section>
    </main>
  );
};

export default EditEmployee;
