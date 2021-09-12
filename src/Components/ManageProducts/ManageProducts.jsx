import { Route } from "react-router-dom";
import ManageProductsNavigation from "../ManageProductsNavigation/ManageProductsNaviagtion";
import styles from "./ManageProducts.module.scss";
import { manageProductsRoutes } from "../../Routes/Routes";
import setting from '../../images/Processing-pana.png';

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
    <article className={`text-blue-400 Casablanca text-lg lg:text-3xl flex flex-col items-center`}>
      <h1>برای مدیریت غذا بر روی یکی از گزینه ها کلیک کنید</h1>
      <img className={`w-full h-full`} src={setting} alt="تنظیمات"/>
    </article>
  );
};
