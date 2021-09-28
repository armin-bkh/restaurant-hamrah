import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiFillEdit } from 'react-icons/ai';
import { deleteEmployee } from "../../../../Services/deleteEmployee";
import { getEmployee } from '../../../../Services/getEmployee';
import { useToasts } from "react-toast-notifications";
import styles from './EmployeeMember.module.scss';
import EmployeeMemberLoaidngSkeleton from '../../../LoadingSkeleton/EmployeeMemberLoadingSkeleton/EmployeeMemberLoadingSkeleton';
import UserJobContext from "../../../../Context/UserJobContext";

const EmployeeMember = ({ location, match, history }) => {
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(false);
  const { addToast } = useToasts();
  const employeeID = match.params.id;
  const userJob = useContext(UserJobContext);

  useEffect(() => {
    if(userJob === "حسابدار" || userJob === "مدیریت") {
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
    } else { history.push('/manage') }
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

  let returnValue = <EmployeeMemberLoaidngSkeleton />;

  if (employee && !error) {
    returnValue = (
      <section className={`max-w-md md:max-w-xl boxShadow p-5 rounded-md ${styles.employeeProfile} flex flex-col`}>
        <Link to="/manage/personnel">
          <BsBoxArrowInRight className={`text-2xl text-blue-400`} />
        </Link>
        <div className={`flex items-center justify-center mb-2`}>
        <div className={`relative rounded-full`}>
          <FaUserCircle
            className={`text-gray-800 m-0 ${styles.userIcon}`}
          />
          <Link className={`border-2 border-blue-400 text-blue-400 p-1 text-lg md:text-2xl rounded-full
           inline absolute ${styles.editIcon}`}
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
         text-lg md:text-xl py-2 block w-full mt-auto cursor-pointer transition 
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
