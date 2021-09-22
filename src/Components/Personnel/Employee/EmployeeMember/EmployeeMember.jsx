import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiFillEdit } from 'react-icons/ai';
import { deleteEmployee } from "../../../../Services/deleteEmployee";
import { getEmployee } from '../../../../Services/getEmployee';
import { useToasts } from "react-toast-notifications";

const EmployeeMember = ({ location, match, history }) => {
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(false);
  const { addToast } = useToasts();
  const employeeID = match.params.id;

  useEffect(() => {
    if (location.state) {
      const { employee } = location.state;
      setEmployee(employee);
      return;
    }
    if(employeeID){
        const fetchEmployee = async () =>{
            try{
                const { data } = await getEmployee(employeeID);
                setEmployee(data);
            } catch(err){
                setError(true);
                history.push('/manage/personnel');
            }
        }
        fetchEmployee();
    }
  }, []);

  const removeHandler = async () => {
    try {
      await deleteEmployee(employeeID);
      addToast(`${employee.name} از کادر پرسنل حذف شد`, {appearance: 'success'});
      history.push("/manage/personnel");
    } catch (error) {
      setError(true);
      addToast('مجددا تلاش کنید', {appearance: 'error'})
    }
  };

  let returnValue = <h1>loading...</h1>;
  if (employee) {
    returnValue = (
      <section className={`max-w-md md:max-w-xl boxShadow p-5 rounded-md`}>
        <Link to="/manage/personnel">
          <BsBoxArrowInRight className={`text-2xl text-blue-400`} />
        </Link>
        <div className={`flex items-center justify-center mb-2`}>
        <div className={`relative rounded-full`}>
          <FaUserCircle
            className={`text-gray-800 m-0 text-9xl`}
          />
          <Link className={`border-2 border-blue-400 text-blue-400 p-0.5 text-lg rounded-full
           inline absolute right-0 top-5`}
           to={`/manage/personnel/edit-employee-${employee.id}`}>
             <AiFillEdit />
           </Link>
           </div>
        </div>
        <div>
          <div className={`mb-5 flex items-center justify-between`}>
            <h1 className={`text-3xl md:text-5xl font-bold Casablanca text-blue-400 ml-10`}>
              {employee.name}
            </h1>
            <h6 className={`text-sm font-medium text-gray-800`}>
              {employee.id}
            </h6>
          </div>
          <h3 className={`text-gray-800 text-sm font-medium Dirooz`}>
            شماره تماس: {employee.tel}َ
          </h3>
        </div>
        <button
          className={`rounded-md border border-blue-400 text-blue-400 Dirooz
         text-lg md:text-xl py-2 block w-full mt-20 cursor-pointer transition 
         hover:bg-blue-400 hover:text-white`}
          onClick={removeHandler}
        >
          حذف {employee.job}
        </button>
      </section>
    );
  }
  return (
    <main className={`min-h-screen flex items-center justify-center`}>
      {returnValue}
    </main>
  );
};

export default EmployeeMember;
