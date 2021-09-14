import Product from "../Product/Product";
import styles from "./ProductList.module.scss";
import { BiFoodMenu } from "react-icons/bi";
import Filter from "../Filter/FIlter";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/getAllProducts";
import ProductsLoadingSkeleton from "../LoadingSkeleton/ProductsLoadingSkeleton/ProductsLoadingSkeleton";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(true);
      }
    };
    getProducts();
  }, []);

  const filterHandler = async (value) =>{
    try{
      await setProducts(null);
      const { data } = await getAllProducts();
      if(value === 'همه'){
        setProducts(data);
        if(!data.length) setError(true)
        else setError(false)
        return;
      }
      const filteredProducts = data.filter(pr => pr.filter === value);
      setProducts(filteredProducts);
      if(!filteredProducts.length) setError(true)
      else setError(false)
    }
    catch(err){
      setError(true);
    }
  }

  let returnValue = (
    Array(8).fill().map((item, index)=> {
      return <ProductsLoadingSkeleton key={index} />
    })
  );

  if (error)
    returnValue = (
      <h1
        className={`text-base md:text-lg lg:text-xl text-blue-400 Casablanca tracking-widest`}
      >
        منوی رستوران خالی است
      </h1>
    );

  if (products && !error)
    returnValue = products.map((Pr) => <Product key={Pr.id} inf={Pr} />);

  return (
    <section
      className={`mt-10 mx-6 mb-4 flex flex-col px-2 py-6 overflow-x-hidden bgGradient ${styles.productListContainer}`}
    >
      <header className={`mb-3 px-2`}>
        <h1
          className={`mb-3 flex justify-start items-center text-base md:text-lg
           lg:text-xl text-blue-400 Casablanca tracking-widest`}
        >
          <BiFoodMenu className={`ml-2 text-blue-400`} />
          منوی رستوران
        </h1>
        <Filter onFilter={filterHandler} />
      </header>
      <article
        className={`flex flex-nowrap pt-11 pb-4 px-4 ${
          products ? `overflow-x-scroll` : "overflow-x-hidden"
        } ${styles.productList}`}
      >
        {returnValue}
      </article>
    </section>
  );
};

export default ProductList;
