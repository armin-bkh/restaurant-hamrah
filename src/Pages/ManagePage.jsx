import ManageLayout from "../Layouts/ManageLayout";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Redux/User/userActions";

const ManagePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "مدیریت";
  }, []);

  return user ? (
    <ManageLayout>
      <Outlet />
    </ManageLayout>
  ) : null;
};

export default ManagePage;
