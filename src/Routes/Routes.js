import ManageUser from "../Pages/ManageUsers";
import ReservationPage from "../Pages/ReservationPage";

const routes = [
    {path: "/reservation", component: ReservationPage},
    {path: "/", component: ManageUser},
]

export default routes;