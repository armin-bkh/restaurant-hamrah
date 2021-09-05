import { useEffect } from "react";
import { Route } from "react-router-dom";
import ManageProducts from "../Components/ManageProducts/ManageProducts";
import ManageTable from "../Components/ManageTables/manageTables";
import ManageLayout from "../Layouts/ManageLayout";

const ManagePage = ({history}) => {

    useEffect(()=>{
        history.push("/manage/manage-tables")
    }, [])

    return (
        <ManageLayout>
            <Route path="/manage/manage-tables" component={ManageTable} />
            <Route path="/manage/manage-products" component={ManageProducts} />
        </ManageLayout>
     );
}
 
export default ManagePage;