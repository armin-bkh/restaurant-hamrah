import Product from "../Product/Product";
import { useProducts } from "../Provider/ProductsProvider";
import styles from './ProductList.module.scss';

const ProductList = () => {
    const products = useProducts();
    return ( 
        <section className={`mt-10 mx-6 overflow-x-scroll flex flex-nowrap py-12 ${styles.productListContainer}`}>
                {
                    products.length ? 
                    products.map(
                        Pr => <Product key={Pr.id} inf={Pr}/>
                    ) : 
                    <h1>منوی رستوارن مد نظر شما خالی است</h1>
                }
        </section>
     );
}
 
export default ProductList;