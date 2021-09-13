import { Route } from "react-router-dom";
import ManageLayout from "../Layouts/ManageLayout";
import { manageRoutes } from "../Routes/Routes";

const ManagePage = () => {
  return (
      <ManageLayout>
        {
          manageRoutes.map(route => (
            <Route key={route.path} {...route} />
          ))
        }
      </ManageLayout>
  );
};

export default ManagePage;
