import ManageLayout from "../Layouts/ManageLayout";
import { useEffect, useState } from "react";
import UserJobContext from "../Context/UserJobContext";
import { Outlet, useLocation, useNavigate } from "react-router";

const ManagePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    document.title = "مدیریت";
    if (!state) {
      const userData = JSON.parse(localStorage.getItem("restaurantUser"));
      if (!userData) navigate("/login");
      setUser(userData);
    } else {
      setUser(state);
    }
    navigate("manageDetail", { replace: true });
  }, []);

  return user ? (
    <UserJobContext.Provider value={user.job}>
      <ManageLayout>
        <Outlet />
      </ManageLayout>
    </UserJobContext.Provider>
  ) : null;
};

export default ManagePage;
