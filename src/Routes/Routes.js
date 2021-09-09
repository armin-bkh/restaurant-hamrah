import HomePage from "../Pages/HomePage";
import ManagePage from "../Pages/ManagePage";
import ReservationPage from "../Pages/ReservationPage";
import SignUpPage from "../Pages/SignupPage";

const routes = [
    {path: '/', component: HomePage, exact: true},
    {path: "/reservation", component: ReservationPage},
    {path: "/manage", component: ManagePage},
    {path: "/auth", component: SignUpPage},
]


export default routes;