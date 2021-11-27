import { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../Services/deleteEmployee";
import { getAllPersonnel } from "../../Services/getAllPersonnel";
import { getUserFilters } from "../../Services/getuserFilters";
import Employee from "./Employee/Employee";
import { useToasts } from "react-toast-notifications";
import EmployeeLoadingSkeleton from "../LoadingSkeleton/EmployeeLoadingSkeleton/EmployeeLoadingSkeleton";
import SelectBoxLoadingSkeleton from "../LoadingSkeleton/SelectBoxLoadingSkeleton/SelectBoxLoadingSkeleton";
import UserJobContext from "../../Context/UserJobContext";
import SelectBox from "../Common/SelectBox/SelectBox";

const Personnel = () => {
  const [personnel, setPersonnel] = useState(null);
  const [allPersonnel, setAllPersonnel] = useState(null);
  const [filters, setFilters] = useState(null);
  const [filter, setFilter] = useState("همه");
  const [error, setError] = useState(false);
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const userJob = useContext(UserJobContext);

  useEffect(() => {
    if (userJob === "حسابدار" || userJob === "مدیریت") {
      const fetchPersonnel = async () => {
        try {
          const { data } = await getAllPersonnel();
          setPersonnel(data);
          setAllPersonnel(data);
          const filters = await getUserFilters();
          setFilters(filters.data);
        } catch (err) {
          setError(true);
        }
      };
      fetchPersonnel();
    } else {
      navigate("/manage");
    }
  }, []);

  useEffect(() => {
    if (allPersonnel) filterPersonnelHandler(filter);
  }, [allPersonnel]);

  const deleteEmployeeHandler = async (id) => {
    try {
      await deleteEmployee(id);
      const filteredPersonnel = allPersonnel.filter((emp) => emp.id !== id);
      const index = personnel.findIndex((emp) => emp.id === id);
      const name = personnel[index].name;
      setAllPersonnel(filteredPersonnel);
      setPersonnel(filteredPersonnel);
      addToast(`${name} از کادر پرسنل حذف شد`, { appearance: "success" });
    } catch (err) {
      setError(true);
      addToast("مجددا تلاش کنید", { appearance: "error" });
    }
  };

  const filterPersonnelHandler = (selectedOption) => {
    const selectedOptionValue = selectedOption?.value || selectedOption;
    setFilter(selectedOptionValue);
    if (selectedOptionValue === "همه") {
      setPersonnel(allPersonnel);
      if (!allPersonnel.length) setError(true);
      else setError(false);
      return;
    }
    const filteredPersonnel = allPersonnel.filter(
      (em) => em.job === selectedOptionValue
    );
    setPersonnel(filteredPersonnel);
    if (!filteredPersonnel.length) setError(true);
    else setError(false);
  };

  const returnError = () => {
    if (filter !== "همه") return "این دسته بندی خالی است";
    return "کادر پرسنل خالی است";
  };

  let returnValue = Array(20)
    .fill()
    .map((it, index) => <EmployeeLoadingSkeleton key={index} />);

  if (personnel && !error) {
    returnValue = personnel.map((emp) => (
      <Employee
        key={emp.id}
        employee={emp}
        onDelete={() => deleteEmployeeHandler(emp.id)}
      />
    ));
  }

  if (error) {
    returnValue = (
      <article className={`flex h-96 justify-center items-center`}>
        <h1 className={`text-blue-400 text-3xl md:text-6xl Casablanca`}>
          {returnError()}
        </h1>
      </article>
    );
  }

  return (
    <main className={`p-5`}>
      <h1 className={`color-gradient text-4xl md:text-5xl Casablanca mb-14`}>
        کادر رستوران
      </h1>
      <section
        className={`relative boxShadowInner rounded-md min-h-screen py-1 px-5`}
      >
        <Link
          to="/manage/personnel/add-employee"
          className={`absolute -top-10 left-4 text-blue-400
                 flex items-center text-lg md:text-2xl Casablanca`}
        >
          <AiOutlineUserAdd className={`ml-3`} /> افزودن به کادر رستوران
        </Link>
        <header className={`mt-3`}>
          {filters ? (
            <SelectBox
              options={filters}
              value={filter}
              onChange={filterPersonnelHandler}
            />
          ) : (
            <div>
              <SelectBoxLoadingSkeleton />
            </div>
          )}
        </header>
        {returnValue}
      </section>
    </main>
  );
};

export default Personnel;
