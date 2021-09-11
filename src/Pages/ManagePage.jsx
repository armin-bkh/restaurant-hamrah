import { Route } from "react-router-dom";
import manageDetail from "../Components/manageDetail/ManageDetail";
import ManageProducts from "../Components/ManageProducts/ManageProducts";
import ManageTable from "../Components/ManageTables/manageTables";
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
