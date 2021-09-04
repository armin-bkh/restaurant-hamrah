import { Route } from "react-router-dom";
import ManageUserLayout from "../Layouts/ManageUsersLayout";

const ManageUser = () => {
    return (
        <ManageUserLayout>
            <Route path="/manage/tables" component={}/>
            <Route path="/manage/manage-products" component={} />
        </ManageUserLayout>
     );
}
 
export default ManageUser;