import { useEffect } from "react";
import { Route } from "react-router-dom";
import manageDetail from "../Components/manageDetail/ManageDetail";
import ManageProducts from "../Components/ManageProducts/ManageProducts";
import ManageTable from "../Components/ManageTables/manageTables";
import ManageLayout from "../Layouts/ManageLayout";

const ManagePage = ({history}) => {

    return (
        <ManageLayout>
        <Route path={"/manage"} component={manageDetail} exact={true}/>
            <Route path="/manage/manage-tables" component={ManageTable} />
            <Route path="/manage/manage-products" component={ManageProducts} />
        </ManageLayout>
     );
}
 
export default ManagePage;