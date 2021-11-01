import Product from "../Product/Product";
import styles from "./ProductList.module.scss";
import { BiFoodMenu } from "react-icons/bi";
import Filter from "../Filter/FIlter";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/getAllProducts";
import ProductsLoadingSkeleton from "../LoadingSkeleton/ProductsLoadingSkeleton/ProductsLoadingSkeleton";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("همه");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProducts();
        console.log(data);
        setProducts(data);
        setProductList(data);
      } catch (err) {
        setError(true);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      filterProductsHandler(filter);
    }
  }, [products]);

  const filterProductsHandler = (value) => {
    setFilter(value);
    if (value === "همه") {
      setProductList(products);
      if (!products.length) setError(true);
      else setError(false);
      return;
    }
    const filteredProducts = products.filter((pr) => pr.filter === value);
    setProductList(filteredProducts);
    if (!filteredProducts.length) setError(true);
    else setError(false);
  };

  const pinProductHandler = (id) => {
    const savedProducts = [...products];
    const index = savedProducts.findIndex((pr) => pr.id === id);
    const selectedEl = { ...savedProducts[index] };
    selectedEl.pin = !selectedEl.pin;
    savedProducts[index] = selectedEl;
    setProducts(savedProducts);
  };

  let returnValue = Array(8)
    .fill()
    .map((item, index) => {
      return <ProductsLoadingSkeleton key={index} />;
    });

  if (error)
    returnValue = (
      <h1
        className={`text-base md:text-lg lg:text-xl text-blue-400 Casablanca tracking-widest`}
      >
        {filter
          ? "غذایی در این دسته بندی موجود نمی باشد"
          : "منوی رستوران خالی است"}
      </h1>
    );

  if (productList && !error)
    returnValue = productList.map((Pr) => (
      <Product key={Pr.id} onPin={pinProductHandler} inf={Pr} />
    ));

  return (
    <section
      className={`mt-10 mx-0 md:mx-6 p-3 md:p-6  mb-4 flex flex-col overflow-x-hidden bgGradient ${styles.productListContainer}`}
    >
      <header className={`mb-3 px-2`}>
        <h1
          className={`mb-3 flex justify-start items-center text-base md:text-lg
           lg:text-xl text-blue-400 Casablanca tracking-widest`}
        >
          <BiFoodMenu className={`ml-2 text-blue-400`} />
          منوی رستوران
        </h1>
        <Filter onFilter={filterProductsHandler} />
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
