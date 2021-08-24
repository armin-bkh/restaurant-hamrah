import { useProductsAction } from "../Provider/ProductsProvider";
import { BiPin } from "react-icons/bi";
import styles from "./Products.module.scss";
import { useState } from "react";

const Product = ({ inf }) => {
  const [count, setCount] = useState(1)
    const [pin, setPin] = useState(false);
  const { toShowHandler } = useProductsAction();
  
  const clickHandler = () => {
    toShowHandler({...inf, quantity: count});
    setCount(1)
  };

  const likeHandler = () => {
    setPin((prevpin) => !prevpin);
  };

  return (
    <figure className={`flex-grow-0 flex-shrink-0 ${styles.productContainer}`}>
      <img loading="lazy" onClick={clickHandler} className={`${styles.productImage}`} src={inf.img} alt={inf.title} />
      <figcaption className={styles.productCaption}>
        <h1 className={`text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-3 ${styles.productTitle}`}>{inf.title}</h1>
        <div className="flex justify-between items-center">
          <span className={`text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl ${styles.productPriceBadge}`}>{inf.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
          <span>
            <BiPin
            className="cursor-pointer text-xl transition-colors"
              onClick={likeHandler}
              style={pin ? { color: "#f7362f" } : { color: "#fff" }}
            />
          </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Product;
