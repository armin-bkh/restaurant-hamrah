import ManagePage from "../Pages/ManagePage";
import ReservationPage from "../Pages/ReservationPage";

const routes = [
    {path: "/reservation", component: ReservationPage},
    {path: "/manage", component: ManagePage},
    {path: "/manage/tables", component: ManagePage},
    {path: "/manage/manage-products", component: ManagePage},
]

export default routes;