import { Outlet, useNavigate } from "react-router-dom";
import ManageProductsNavigation from "../ManageProductsNavigation/ManageProductsNaviagtion";
import setting from "../../../Assets/SVG/processing-animate.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ManageProducts = () => {
  const { job } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "مدیریت";
    if (job === "حسابدار" || job === "مدیریت") {
      return;
    } else {
      navigate("/manage");
    }
  }, []);

  return (
    <main
      className={`grid gap-x-3 grid-col-1 min-h-screen lg:grid-cols-3 xl:grid-cols-4 p-5 Dirooz`}
    >
      <ManageProductsNavigation />
      <section className={`lg:col-span-2 xl:col-span-3 p-5`}>
        <Outlet />
      </section>
    </main>
  );
};

export default ManageProducts;

export const ManageProductsDetail = () => {
  return (
    <article
      className={`color-gradient Casablanca text-lg lg:text-3xl flex flex-col items-center`}
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
