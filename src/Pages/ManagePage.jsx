import ManageLayout from "../Layouts/ManageLayout";
import { useEffect, useState } from "react";
import UserJobContext from "../Context/UserJobContext";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getUserData } from "../Redux/User/userActions";

const ManagePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    document.title = "مدیریت";
    dispatch(getUserData());
    // navigate("manageDetail", { replace: true });
  }, []);

  return (
    <ManageLayout>
      <Outlet />
    </ManageLayout>
  );
};

export default ManagePage;
