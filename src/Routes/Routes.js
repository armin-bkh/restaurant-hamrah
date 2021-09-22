import ManageAddProduct from "../Components/ManageAddProduct/ManageAddProduct";
import manageDetail from "../Components/manageDetail/ManageDetail";
import ManageEditProduct from "../Components/ManageEditProduct/ManageEditProduct";
import ManageProducts, { ManageProductsDetail } from "../Components/ManageProducts/ManageProducts";
import ManageRemoveProduct from "../Components/ManageRemoveProduct/ManageRemoveProduct";
import ManageTable from "../Components/ManageTables/manageTables";
import AboutUsPage from "../Pages/AboutUsPage";
import HomePage from "../Pages/HomePage";
import ManagePage from "../Pages/ManagePage";
import ReservationPage from "../Pages/ReservationPage";
import AuthPage from "../Pages/AuthPage";
import ServicesPage from "../Pages/ServicesPage";
import NotFoundPage from "../Pages/NotFoundPage";
import NotFound from "../Components/NotFound/NotFound";
import ContactPage from '../Pages/ContactPage';
import Reports from "../Components/Reports/Reports";
import Personnel from "../Components/Personnel/Personnel";
import EmployeeMember from "../Components/Personnel/Employee/EmployeeMember/EmployeeMember";

export const routes = [
    {path: '/', component: HomePage, exact: true},
    {path: "/reservation", component: ReservationPage, exact: true},
    {path: "/manage", component: ManagePage},
    {path: "/auth", component: AuthPage, exact: true},
    {path: "/about-us", component: AboutUsPage, exact: true},
    {path: "/services", component: ServicesPage, exact: true},
    {path: "/contact", component: ContactPage, exact: true},
    {path: "*", component: NotFoundPage},
]

export const manageRoutes = [
    {path: '/manage', component: manageDetail, exact: true},
    {path: '/manage/manage-tables', component: ManageTable, exact: true},
    {path: '/manage/manage-products', component: ManageProducts,},
    {path: '/manage/report', component: Reports, exact: true},
    {path: '/manage/personnel', component: Personnel, exact: true},
    {path: '/manage/personnel/employee-:id', component: EmployeeMember, },
    {path: "*", component: NotFound},
]

export const manageProductsRoutes = [
    {path: '/manage/manage-products' , component: ManageProductsDetail, exact: true},
    {path: '/manage/manage-products/edit-product', component: ManageEditProduct, exact: true},
    {path: '/manage/manage-products/remove-product', component: ManageRemoveProduct, exact: true},
    {path: '/manage/manage-products/add-product', component: ManageAddProduct, exact: true},
    {path: "*", component: NotFound},
]