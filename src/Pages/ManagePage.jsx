import ManageLayout from "../Layouts/ManageLayout";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ManagePage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.title = "مدیریت";
    if (user === null) navigate("/");
  }, [user]);

  return user ? (
    <ManageLayout>
      <Outlet />
    </ManageLayout>
  ) : null;
};

export default ManagePage;
