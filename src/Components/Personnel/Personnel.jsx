import { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../Services/deleteEmployee";
import { getAllPersonnel } from "../../Services/getAllPersonnel";
import Employee from "./Employee/Employee";
import { useToasts } from "react-toast-notifications";
import EmployeeLoadingSkeleton from "../LoadingSkeleton/EmployeeLoadingSkeleton/EmployeeLoadingSkeleton";

const Personnel = () => {
  const [personnel, setPersonnel] = useState(null);
  const [allPersonnel, setAllPersonnel] = useState(null);
  const [error, setError] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const { data } = await getAllPersonnel();
        setPersonnel(data);
        setAllPersonnel(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchPersonnel();
  }, []);

  const deleteEmployeeHandler = async (id) => {
    try {
      await deleteEmployee(id);
      const filteredPersonnel = personnel.filter((emp) => emp.id !== id);
      const index = personnel.findIndex((emp) => emp.id === id);
      const name = personnel[index].name;
      setPersonnel(filteredPersonnel);
      setAllPersonnel(filteredPersonnel);
      addToast(`${name} از کادر پرسنل حذف شد`, { appearance: "success" });
    } catch (err) {
      setError(true);
      addToast("مجددا تلاش کنید", { appearance: "error" });
    }
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
          کادر پرسنل خالی است
        </h1>
      </article>
    );
  }

  return (
    <main className={`min-h-screen p-5`}>
      <h1 className={`color-gradient text-4xl md:text-5xl Casablanca mb-14`}>
        کادر رستوران
      </h1>
      <section className={`relative`}>
        <Link
          to="/manage/personnel/add-employee"
          className={`absolute -top-10 left-4 text-blue-400
                 flex items-center  text-lg md:text-2xl Casablanca`}
        >
          <AiOutlineUserAdd className={`ml-3`} /> افزودن به کادر رستوران
        </Link>
        {returnValue}
      </section>
    </main>
  );
};

export default Personnel;
