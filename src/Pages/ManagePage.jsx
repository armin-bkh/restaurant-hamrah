import { Route, Switch } from "react-router-dom";
import ManageLayout from "../Layouts/ManageLayout";
import { manageRoutes } from "../Routes/Routes";
import { useEffect } from 'react';

const ManagePage = ({ history }) => {

  useEffect(()=>{
    document.title = "مدیریت";
  }, [])

  return (
      <ManageLayout>
      <Switch>
        {
          manageRoutes.map(route => (
            <Route key={route.path} {...route} />
          ))
        }
      </Switch>
      </ManageLayout>
  );
};

export default ManagePage;
