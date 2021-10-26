import { useState } from "react";
import ManageFooter from "../Components/ManageFooter/ManageFooter";
import ManageHeader from "../Components/ManageHeader/ManageHeader";
import TodoListContainer from "../Components/TodoList/TodoListContainer";

const ManageUserLayout = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <ManageHeader />
      <span
        onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
        className={`z-50 fixed left-2 top-3 w-1 rounded-md h-10 bg-gray-800`}
      ></span>
      {isShow && <TodoListContainer />}
      {children}
      <ManageFooter />
    </>
  );
};

export default ManageUserLayout;
