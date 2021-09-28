import { Route, Switch } from "react-router-dom";
import ManageLayout from "../Layouts/ManageLayout";
import { manageRoutes } from "../Routes/Routes";
import { useEffect, useState } from "react";

const ManagePage = ({ history, location }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    document.title = "مدیریت";
    if (!location.state) history.push("/login");
    else {
      const { employee } = location.state;
      setUser(employee);
    }
  }, []);

  return (
    user ? 
    <ManageLayout>
      <Switch>
        {manageRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </ManageLayout> :
    null
  );
};

export default ManagePage;
