import { AiOutlineUserDelete } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Employee = ({ employee, onDelete }) => {
  return (
    <article
        className={`flex items-center justify-between boxShadow px-5 py-3 mb-3 rounded-md`}
      >
    <Link className={`flex-grow`} to={{pathname: `/manage/personnel/employee-${employee.id}`, state: { employee }}}>
        <div className={`flex items-center justify-between w-1/4`}>
          <div className={`flex items-center justify-center`}>
            <FaUserCircle className={`ml-3 text-gray-800 text-5xl`} />
            <div>
              <h1 className={`text-black text-xl font-bold Dirooz`}>
                {employee.name}
              </h1>
              <h4 className={`text-gray-800 text-sm font-medium`}>
                {employee.tel}
              </h4>
            </div>
          </div>
          <h3 className={`text-black text-sm Dirooz`}>{employee.job}</h3>
        </div>
    </Link>
        <button
          onClick={onDelete}
          className={`text-white gradient rounded-full text-xl
                 p-2 mx-2 cursor-pointer`}
        >
          <AiOutlineUserDelete />
        </button>
      </article>
  );
};

export default Employee;
