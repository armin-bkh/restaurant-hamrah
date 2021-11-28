import ManageDetail from "../Components/manageDetail/ManageDetail";
import ManageEditProduct from "../Components/ManageProductandTable/ManageEditProduct/ManageEditProduct";
import ManageProducts, {
  ManageProductsDetail,
} from "../Components/ManageProductandTable/ManageProducts/ManageProducts";
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
import ContactPage from "../Pages/ContactPage";
import Reports from "../Components/Reports/Reports";
import Personnel from "../Components/Personnel/Personnel";
import EmployeeMember from "../Components/Personnel/Employee/EmployeeMember/EmployeeMember";
import AddEmployee from "../Components/Personnel/AddEmployee/AddEmployee";
import EditEmployee from "../Components/Personnel/EditEmployee/EditEmployee";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import ManageFiltersGroups from "../Components/ManageFiltersGroups/ManageFiltersGroups";

export const manageProductsRoutes = [
  { path: "edit-product", element: <ManageEditProduct /> },
  { path: "remove-product", element: <ManageRemoveProduct /> },
  { path: "add-product", element: <ManageAddProduct /> },
  { path: "", element: <ManageProductsDetail /> },
  { path: "*", element: <NotFound /> },
];

export const manageRoutes = [
  { path: "filter-groups", element: <ManageFiltersGroups /> },
  { path: "personnel/employee-:id", element: <EmployeeMember /> },
  { path: "personnel/edit-employee-:id", element: <EditEmployee /> },
  { path: "personnel/add-employee", element: <AddEmployee /> },
  { path: "personnel", element: <Personnel /> },
  { path: "report", element: <Reports /> },
  { path: "tables", element: <ManageTable /> },
  { path: "", element: <ManageDetail /> },
  { path: "*", element: <NotFound /> },
  {
    path: "products/",
    element: <ManageProducts />,
    children: manageProductsRoutes,
  },
];

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "reservation", element: <ReservationPage /> },
  { path: "manage/", element: <ManagePage />, children: manageRoutes },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignupPage /> },
  { path: "about-us", element: <AboutUsPage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "*", element: <NotFoundPage /> },
];
