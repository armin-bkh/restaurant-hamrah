import { Route, Switch } from "react-router-dom";
import ManageProductsNavigation from "../ManageProductsNavigation/ManageProductsNaviagtion";
import styles from "./ManageProducts.module.scss";
import { manageProductsRoutes } from "../../Routes/Routes";
import setting from "../../Assets/SVG/processing-animate.svg";

const ManageProducts = () => {
  return (
    <main
      className={`grid gap-x-3 grid-col-1 min-h-screen md:grid-cols-3 lg:grid-cols-4 p-5 md:col-span-2 Dirooz lg:col-span-3`}
    >
      <ManageProductsNavigation />
      <section
        className={`md:col-span-2 lg:col-span-3 p-5 ${styles.manageProductsContianer}`}
      >
        <Switch>
          {manageProductsRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </section>
    </main>
  );
};

export default ManageProducts;

export const ManageProductsDetail = () => {
  return (
    <article
      className={`text-blue-400 Casablanca text-lg lg:text-3xl flex flex-col items-center`}
    >
      <h1>برای مدیریت غذا بر روی یکی از گزینه ها کلیک کنید</h1>
      <img
        className={`max-w-xs sm:max-wsm md:max-w-md lg:max-w-lg xl:max-w-xl
      2xl:max-w-2xl 3xl:max-w-3xl imgShadow`}
        loading="lazy"
        src={setting}
        alt="تنظیمات"
      />
    </article>
  );
};
