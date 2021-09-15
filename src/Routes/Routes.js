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

export const routes = [
    {path: '/', component: HomePage, exact: true},
    {path: "/reservation", component: ReservationPage},
    {path: "/manage", component: ManagePage},
    {path: "/auth", component: AuthPage},
    {path: "/about-us", component: AboutUsPage},
    {path: "/services", component: ServicesPage},
    {path: "*", component: NotFoundPage},
]

export const manageRoutes = [
    {path: '/manage', component: manageDetail, exact: true},
    {path: '/manage/manage-tables', component: ManageTable},
    {path: '/manage/manage-products', component: ManageProducts},
    {path: "*", component: NotFound},
]

export const manageProductsRoutes = [
    {path: '/manage/manage-products' , component: ManageProductsDetail, exact: true},
    {path: '/manage/manage-products/edit-product', component: ManageEditProduct},
    {path: '/manage/manage-products/remove-product', component: ManageRemoveProduct},
    {path: '/manage/manage-products/add-product', component: ManageAddProduct},
    {path: "*", component: NotFound},
]