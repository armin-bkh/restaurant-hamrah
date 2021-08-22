import Product from "../Product/Product";
import { useProducts } from "../Provider/ProductsProvider";
import styles from './ProductList.module.scss';
import { BiFoodMenu } from 'react-icons/bi';

const ProductList = () => {
    const products = useProducts();
    return ( 
        <section className={`mt-10 mx-6 flex flex-col px-2 py-12 ${styles.productListContainer}`}>
            <h1 className={`mb-5 flex items-center text-base md:text-lg lg:text-xl px-2 text-yellow-400 ${styles.productListTitle}`}><BiFoodMenu className={`ml-2 text-yellow-400`} />منوی رستوران</h1>
            <article className={`flex flex-nowrap py-8 px-2 overflow-x-scroll ${styles.productList}`}>
                {
                    products.length ? 
                    products.map(
                        Pr => <Product key={Pr.id} inf={Pr}/>
                    ) : 
                    <h1 className={`text-yellow-400`}>منوی رستوارن مد نظر شما خالی است</h1>
                }
            </article>
        </section>
     );
}
 
export default ProductList;