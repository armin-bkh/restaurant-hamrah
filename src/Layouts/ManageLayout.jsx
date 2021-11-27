import { useState } from "react";
import ManageHeader from "../Components/ManageHeader/ManageHeader";
import TodoListContainer from "../Components/TodoList/TodoListContainer";
import { MdKeyboardArrowRight } from "react-icons/md";
import MainFooter from "../Components/MainFooter/MainFooter";

const ManageUserLayout = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <ManageHeader />
      <span
        onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        className={`z-50 cursor-pointer text-gray-800 transition-all flex items-center justify-center text-4xl fixed right-2 top-3 ${
          !isShow ? "w-0" : "w-10"
        } rounded-md h-10 border-2 border-gray-800`}
      >
        {isShow && <MdKeyboardArrowRight />}
      </span>
      {isShow && <TodoListContainer />}
      {children}
      <MainFooter />
    </>
  );
};

export default ManageUserLayout;
