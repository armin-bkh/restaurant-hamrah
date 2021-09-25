import { AiOutlineUserDelete, AiOutlineUserSwitch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Employee = ({ employee, onDelete }) => {
  return (
    <article
      className={`flex items-center justify-between boxShadow px-5 py-3 my-4 rounded-md`}
    >
      <Link
        className={`flex-grow`}
        to={{
          pathname: `/manage/personnel/employee-${employee.id}`,
          state: { employee },
        }}
      >
        <div className={`flex items-center justify-between w-1/4`}>
          <div className={`flex items-center justify-center ml-2`}>
            <FaUserCircle
              className={`ml-3 text-gray-800 text-3xl md:text-5xl`}
            />
            <div>
              <h1 className={`text-black text-sm md:text-xl font-bold Dirooz`}>
                {employee.name}
              </h1>
              <h4 className={`text-gray-800 text-xs md:text-sm font-medium`}>
                {employee.tel}
              </h4>
            </div>
          </div>
          <h3 className={`text-black text-sm Dirooz`}>{employee.job}</h3>
        </div>
      </Link>
      <div className={`flex items-center justify-between`}>
        <Link
          to={`/manage/personnel/edit-employee-${employee.id}`}
          className={`text-white gradient rounded-full text-sm md:text-xl
                 p-2 cursor-pointer`}
        >
          <AiOutlineUserSwitch />
        </Link>
        <button
          onClick={onDelete}
          className={`text-white gradient rounded-full text-sm md:text-xl
                 p-2 mr-2 cursor-pointer`}
        >
          <AiOutlineUserDelete />
        </button>
      </div>
    </article>
  );
};

export default Employee;
