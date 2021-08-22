import { useProductsAction } from "../Provider/ProductsProvider";
import { BiHeartCircle } from "react-icons/bi";
import styles from "./Products.module.scss";
import { useState } from "react";

const Product = ({ inf }) => {
  const [like, setLike] = useState(inf.like);
  const dispatch = useProductsAction();
  const clickHandler = () => {
    dispatch({ type: "toShow", product: inf});
  };
  const likeHandler = () => {
    setLike((prevLike) => !prevLike);
    dispatch({type: 'like', product: inf})
  };

  return (
    <figure className={`flex-grow-0 flex-shrink-0 ${styles.productContainer}`}>
      <img loading="lazy" onClick={clickHandler} className={`${styles.productImage}`} src={inf.img} alt={inf.title} />
      <figcaption className={styles.productCaption}>
        <h1 className={`text-md md:text-lg lg:text-xl mb-3 ${styles.productTitle}`}>{inf.title}</h1>
        <div className="flex justify-between items-center">
          <span className={`text-sm md:text-md lg:text-lg ${styles.productPriceBadge}`}>{inf.price} تومان</span>
          <span>
            <BiHeartCircle
            className="cursor-pointer text-xl transition-colors"
              onClick={likeHandler}
              style={like ? { color: "#f7362f" } : { color: "#fff" }}
            />
          </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Product;
