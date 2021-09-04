import ManageUser from "../Pages/ManageUsers";
import ReservationPage from "../Pages/ReservationPage";

const routes = [
    {path: "/reservation", component: ReservationPage},
    {path: "/manage", component: ManageUser},
    {path: "/manage/tables", component: ManageUser},
    {path: "/manage/manage-products", component: ManageUser},
]

export default routes;