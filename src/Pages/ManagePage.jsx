import { Route, Switch } from "react-router-dom";
import ManageLayout from "../Layouts/ManageLayout";
import { manageRoutes } from "../Routes/Routes";
import { useEffect, useState } from "react";
import UserJobContext from "../Context/UserJobContext";

const ManagePage = ({ history, location }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    document.title = "مدیریت";
    if (!location.state) {
      const userData = JSON.parse(localStorage.getItem('resaurantUser'));
      if(!userData) history.push('/login');
      setUser(userData);
    }
    else {
      const { employee } = location.state;
      setUser(employee);
    }
  }, []);

  return user ? (
    <UserJobContext.Provider value={user.job}>
      <ManageLayout>
        <Switch>
          {manageRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </ManageLayout>
    </UserJobContext.Provider>
  ) : null;
};

export default ManagePage;
