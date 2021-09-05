import { Route } from "react-router-dom";
import ManageProductsNavigation from "../ManageProductsNavigation/ManageProductsNaviagtion";
import ManageAddProduct from "../ManageAddProduct/ManageAddProduct";
import ManageRemoveProduct from "../ManageRemoveProduct/ManageRemoveProduct";
import ManageEditProduct from "../ManageEditProduct/ManageEditProduct";
import styles from './ManageProducts.module.scss';

const ManageProducts = () => {
  return (
    <>
      <section
        className={`grid gap-x-3 grid-col-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen md:flex-row flex-wrap p-5`}
      >
        <ManageProductsNavigation />
        <main className={`md:col-span-2 Dirooz lg:col-span-3`}>
          <section className={`p-5 ${styles.manageProductsContianer}`}>
            <Route
              path="/manage/manage-products/add-product"
              component={ManageAddProduct}
            />
            <Route
              path="/manage/manage-products/edit-product"
              component={ManageEditProduct}
            />
            <Route
              path="/manage/manage-products/remove-product"
              component={ManageRemoveProduct}
            />
          </section>
        </main>
      </section>
    </>
  );
};

export default ManageProducts;
