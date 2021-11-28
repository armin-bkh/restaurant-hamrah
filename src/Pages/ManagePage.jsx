import ManageLayout from "../Layouts/ManageLayout";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Redux/User/userActions";

const ManagePage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
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
