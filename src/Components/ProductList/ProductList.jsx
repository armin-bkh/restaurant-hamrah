import Product from "../Product/Product";
import { useProducts } from "../../Container/ProductsProvider";
import styles from './ProductList.module.scss';
import { BiFoodMenu } from 'react-icons/bi';
import Filter from "../Filter/FIlter";

const ProductList = () => {
    const products = useProducts();
    return ( 
        <section className={`mt-10 mx-6 flex flex-col px-2 py-6 ${styles.productListContainer}`}>
            <header className={`mb-3 px-2`}>
                <h1 className={`mb-3 flex justify-start items-center text-base md:text-lg lg:text-xl text-yellow-400 ${styles.productListTitle}`}><BiFoodMenu className={`ml-2 text-yellow-400`} />منوی رستوران</h1>
                <Filter />
            </header>
            <article className={`flex flex-nowrap pt-11 pb-4 px-2 overflow-x-scroll ${styles.productList}`}>
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