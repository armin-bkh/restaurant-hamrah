import Product from "../Product/Product";
import { useProducts } from "../Provider/ProductsProvider";

const ProductList = () => {
    const products = useProducts();
    return ( 
        <section>
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