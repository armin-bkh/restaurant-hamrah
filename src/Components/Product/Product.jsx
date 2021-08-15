import { useProductsAction } from "../Provider/ProductsProvider";
import { BiHeartCircle } from "react-icons/bi";
import styles from "./Products.module.scss";
import { useRef, useState } from "react";

const Product = ({ inf }) => {
  const [like, setLike] = useState(false);
  const dispatch = useProductsAction();
  const clickHandler = () => {
    dispatch({ type: "toShow", product: inf });
  };
  const likeHandler = () => {
    setLike((prevLike) => !prevLike);
  };

  return (
    <figure className={`flex-grow-0 flex-shrink-0 ${styles.productContainer}`} onClick={clickHandler}>
      <img className={`${styles.productImage}`} src={inf.img} alt={inf.title} />
      <figcaption className={styles.productCaption}>
        <h1 className={`mb-3 ${styles.productTitle}`}>{inf.title}</h1>
        <div className="flex justify-between items-center">
          <span className={styles.productPriceBadge}>{inf.price} تومان</span>
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
