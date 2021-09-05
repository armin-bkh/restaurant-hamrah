import { Route } from 'react-router-dom';
import ManageProductsNavigation from '../ManageProductsNavigation/ManageProductsNaviagtion';
import ManageAddProduct from '../ManageAddProduct/ManageAddProduct';
import ManageRemoveProduct from '../ManageRemoveProduct/ManageRemoveProduct';
import ManageEditProduct from '../ManageEditProduct/ManageEditProduct';

const ManageProducts = () => {
    return (
        <>
        <section className={`flex min-h-screen flex-row flex-wrap p-5`}>
            <ManageProductsNavigation />
            <main className={`flex-grow-1`}>
                <Route path="/manage/manage-products/add-product" component={ManageAddProduct} />
                <Route path="/manage/manage-products/edit-product" component={ManageEditProduct} />
                <Route path="/manage/manage-products/remove-product" component={ManageRemoveProduct} />
            </main>
        </section>
        </>
     );
}
 
export default ManageProducts;