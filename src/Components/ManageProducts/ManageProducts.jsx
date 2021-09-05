import { Route } from 'react-router-dom';
import ManageProductsNavigation from '../ManageProductsNavigation/ManageProductsNaviagtion';

const ManageProducts = () => {
    return (
        <>
            <main>
                <Route path="/manage/manage-products/add-product" />
                <Route path="/manage/manage-products/edit-product" />
                <Route path="/manage/manage-products/remove-product" />
            </main>
            <aside>
            <ManageProductsNavigation />
            </aside>
        </>
     );
}
 
export default ManageProducts;