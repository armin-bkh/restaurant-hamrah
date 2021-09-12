import { Route } from "react-router-dom";
import ManageProductsNavigation from "../ManageProductsNavigation/ManageProductsNaviagtion";
import ManageAddProduct from "../ManageAddProduct/ManageAddProduct";
import ManageRemoveProduct from "../ManageRemoveProduct/ManageRemoveProduct";
import ManageEditProduct from "../ManageEditProduct/ManageEditProduct";
import styles from "./ManageProducts.module.scss";
import { manageProductsRoutes } from "../../Routes/Routes";

const ManageProducts = () => {
  return (
        <main className={`grid gap-x-3 grid-col-1 min-h-screen md:grid-cols-3 lg:grid-cols-4 p-5 md:col-span-2 Dirooz lg:col-span-3`}>
        <ManageProductsNavigation />
          <section className={`md:col-span-2 lg:col-span-3 p-5 ${styles.manageProductsContianer}`}>
            {
              manageProductsRoutes.map((route => (
                <Route key={route.path} {...route} />
              )))
            }
          </section>
        </main>
  );
};

export default ManageProducts;

export const ManageProductsDetail = () => {
  return (
    <article className={`text-blue-400 Casablanca text-lg lg:text-3xl flex justify-center sticky top-4`}>
      <h1>برای مدیریت غذا بر روی یکی از گزینه ها کلیک کنید</h1>
    </article>
  );
};
