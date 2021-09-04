import ManageProducts from "../Components/ManageProducts/ManageProducts";
import ManageTable from "../Components/ManageTables/manageTables";
import ManagePage from "../Pages/ManagePage";
import ReservationPage from "../Pages/ReservationPage";

const routes = [
    {path: "/reservation", component: ReservationPage},
    {path: "/manage", component: ManagePage},
    {path: "/manage/tables", component: ManageTable},
    {path: "/manage/manage-products", component: ManageProducts},
]

export default routes;