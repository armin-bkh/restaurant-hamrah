import { BiPlus, BiMinus, BiRestaurant } from "react-icons/bi";
import styles from "./Displayer.module.scss";
import { numberWithCommas } from "../utils/CommaNumber";
import { useEffect, useState } from "react";
import { getOneProduct } from "../../Services/getOneProduct";
import DisplayerLoadingSkeleton from "../LoadingSkeleton/DisplayerLoadingSkeleton/DisplayerLoadingSkeleton";
import { useReservatioActions } from "../../Container/ReservationProvider";

const Displayer = ({ productId }) => {
  const { addToCartHandler } = useReservatioActions();
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const [error, setError] = useState(false);

  const productPrice = numberWithCommas(product.price);

  const clickHandler = () => {
    addToCartHandler({ id: product.id, quantity: count });
    setCount(1);
  };

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        try {
          const { data } = await getOneProduct(productId);
          setProduct(data);
          setCount(1);
        } catch (err) {
          setError(true);
        }
      };
      getProduct();
    }
  }, [productId]);

  let returnValue = (
    <article
      className={`text-center text-xl sm:text-3xl md:text-5xl
       flex justify-center items-center ${styles.dispalyerWelcome}`}
    >
      <BiRestaurant className={`text-blue-400 inline-block rounded-full ml-2`} />{" "}
      <h1
        className={`bg-clip-text bg-gradient-to-r color-gradient py-3`}
      >
        خوش آمدید لطفا انتخاب کنید
      </h1>
    </article>
  );

  if (productId) returnValue = <DisplayerLoadingSkeleton />;

  if (product) {
    returnValue = (
      <>
        <img
          className={` ${styles.displayerImg}`}
          src={product.img}
          alt={product.title}
        />
        <article className={`${styles.displyerInformation}`}>
          <h1
            className={`text-3xl lg:text-5xl xl:text-4xl text-center ANoor tracking-widest`}
          >
            {product.title}
          </h1>
          <h3
            className={`text-md lg:text-lg xl:text-2xl mt-4 FPArsoo text-blue-400 text-center`}
          >
            {productPrice()} تومان
          </h3>
          <h3
            className={`text-md lg:text-lg xl:text-2xl mt-10 mb-2 ANoor text-blue-400 tracking-widest`}
          >
            توضیحات:
          </h3>
          <p
            className={`mb-10 text-sm md:text-md lg:text-base FPArsoo text-justify`}
          >
            {product.information}
          </p>
          <div className={`flex justify-center items-center`}>
            <button
              type="button"
              className={`text-sm md:text-md lg:text-base p-1 mx-5 rounded-full gradient-bottom
               tracking-widest text-white`}
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              <BiPlus />
            </button>
            <span
              className={`text-sm md:text-md lg:text-lg xl:text-xl FPArsoo text-blue-400 tracking-widest`}
            >
              {count}
            </span>
            <button
              type="button"
              className={`text-sm md:text-md lg:text-base p-1 mx-5 rounded-full gradient-bottom
               tracking-widest text-white`}
              onClick={() =>
                count > 1 && setCount((prevCount) => prevCount - 1)
              }
            >
              <BiMinus />
            </button>
          </div>
          <button
            type="submit"
            onClick={clickHandler}
            className={`text-sm md:text-md lg:text-lg xl:text-xl py-2 mt-12 rounded-sm gradient
             FPArsoo tracking-widest text-white`}
          >
            افزودن به سبد خرید
          </button>
        </article>
      </>
    );
  }

  return (
    <section className={`mx-6 p-6 ${styles.displayerContainer}`}>
      {returnValue}
    </section>
  );
};
export default Displayer;
