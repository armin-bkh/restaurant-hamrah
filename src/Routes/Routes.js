
import manageDetail from "../Components/manageDetail/ManageDetail";
import ManageEditProduct from "../Components/ManageProductandTable/ManageEditProduct/ManageEditProduct";
import ManageProducts, { ManageProductsDetail } from "../Components/ManageProductandTable/ManageProducts/ManageProducts";
import ManageRemoveProduct from "../Components/ManageProductandTable/ManageRemoveProduct/ManageRemoveProduct";
import ManageTable from "../Components/ManageProductandTable/ManageTables/ManageTables";
import ManageAddProduct from "../Components/ManageProductandTable/ManageAddProduct/ManageAddProduct";
import AboutUsPage from "../Pages/AboutUsPage";
import HomePage from "../Pages/HomePage";
import ManagePage from "../Pages/ManagePage";
import ReservationPage from "../Pages/ReservationPage";
import ServicesPage from "../Pages/ServicesPage";
import NotFoundPage from "../Pages/NotFoundPage";
import NotFound from "../Components/NotFound/NotFound";
import ContactPage from '../Pages/ContactPage';
import Reports from "../Components/Reports/Reports";
import Personnel from "../Components/Personnel/Personnel";
import EmployeeMember from "../Components/Personnel/Employee/EmployeeMember/EmployeeMember";
import AddEmployee from "../Components/Personnel/AddEmployee/AddEmployee";
import EditEmployee from '../Components/Personnel/EditEmployee/EditEmployee';
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import ManageFiltersGroups from "../Components/ManageFiltersGroups/ManageFiltersGroups";

export const routes = [
    {path: '/', component: HomePage, exact: true},
    {path: "/reservation", component: ReservationPage, exact: true},
    {path: "/manage", component: ManagePage},
    {path: "/login", component: LoginPage, exact: true},
    {path: "/signup", component: SignupPage, exact: true},
    {path: "/about-us", component: AboutUsPage, exact: true},
    {path: "/services", component: ServicesPage, exact: true},
    {path: "/contact", component: ContactPage, exact: true},
    {path: "*", component: NotFoundPage},
]

export const manageRoutes = [
    {path: '/manage/filter-groups', component: ManageFiltersGroups, exact: true},
    {path: '/manage/personnel/employee-:id', component: EmployeeMember, exact: true},
    {path: '/manage/personnel/edit-employee-:id', component: EditEmployee, exact: true},
    {path: '/manage/personnel/add-employee', component: AddEmployee, exact: true},
    {path: '/manage/personnel', component: Personnel, exact: true},
    {path: '/manage/report', component: Reports, exact: true},
    {path: '/manage/manage-tables', component: ManageTable, exact: true},
    {path: '/manage/manage-products', component: ManageProducts,},
    {path: '/manage', component: manageDetail, exact: true},
    {path: "*", component: NotFound},
]

export const manageProductsRoutes = [
    {path: '/manage/manage-products/edit-product', component: ManageEditProduct, exact: true},
    {path: '/manage/manage-products/remove-product', component: ManageRemoveProduct, exact: true},
    {path: '/manage/manage-products/add-product', component: ManageAddProduct, exact: true},
    {path: '/manage/manage-products' , component: ManageProductsDetail, exact: true},
    {path: "*", component: NotFound},
]