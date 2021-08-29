import Product from "../Product/Product";
import { useProducts } from "../../Container/ProductsProvider";
import styles from './ProductList.module.scss';
import { BiFoodMenu } from 'react-icons/bi';
import Filter from "../Filter/FIlter";
import Skeleton, { SkeletonTheme  } from "react-loading-skeleton";

const ProductList = () => {
    const products = useProducts();
    
    return (
        <section className={`mt-10 mx-6 flex flex-col px-2 py-6 overflow-x-hidden ${styles.productListContainer}`}>
            <header className={`mb-3 px-2`}>
                <h1 className={`mb-3 flex justify-start items-center text-base md:text-lg lg:text-xl text-yellow-400 ${styles.productListTitle}`}><BiFoodMenu className={`ml-2 text-yellow-400`} />منوی رستوران</h1>
                <Filter />
            </header>
            <article className={`flex flex-nowrap pt-11 pb-4 px-2 ${products ? `overflow-x-scroll` : 'overflow-x-hidden'} ${styles.productList}`}>
                {
                    products ? 
                    products.map(
                        Pr => <Product key={Pr.id} inf={Pr}/>
                    ) : 
                    <SkeletonTheme color="#272727" highlightColor="#444">
                        <Skeleton width={document.documentElement.clientWidth} height={150} />
                    </SkeletonTheme>
                }
            </article>
        </section>
     );
}
 
export default ProductList;