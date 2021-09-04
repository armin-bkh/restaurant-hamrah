import { useEffect } from "react";
import { Route } from "react-router-dom";
import ManageProducts from "../Components/ManageProducts/ManageProducts";
import ManageTable from "../Components/ManageTables/manageTables";
import ManageUserLayout from "../Layouts/ManageUsersLayout";

const ManageUser = ({history}) => {
    useEffect(()=>{
        history.push("/manage/manage-tables")
    }, [])
    return (
        <ManageUserLayout>
            <Route path="/manage/manage-tables" component={ManageTable}/>
            <Route path="/manage/manage-products" component={ManageProducts} />
        </ManageUserLayout>
     );
}
 
export default ManageUser;