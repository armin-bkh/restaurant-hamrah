import { useDispaly } from "../Provider/ProductsProvider";
import { BiPlus, BiMinus, BiRestaurant } from "react-icons/bi";
import { useState } from "react";
import styles from "./Displayer.module.scss";
const Displayer = () => {
  const product = useDispaly();
  console.log(product);
  const [count, setCount] = useState(1);
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementHandler = () => {
    count > 1
      ? setCount((prevCount) => prevCount - 1)
      : console.log("کمتر از این مقدار امکان پذیر نیست");
  };
  return (
      
        <section className={`p-6 ${styles.displayerContainer}`}>
    {
      product.title ? (
          <>
          <img
            className={` ${styles.displayerImg}`}
            src={product.img}
            alt={product.title}
          />
          <article className={` ${styles.displyerInformation}`}>
            <h1 className={`text-5xl text-center ${styles.displayerTitle}`}>{product.title}</h1>
            <h3 className={`text-lg mt-4 text-yellow-400 text-center ${styles.displayerPrice}`}>{product.price} تومان</h3>
            <h3 className={`mt-10 mb-2 text-yellow-400`}>توضیحات:</h3>
            <p className={`mb-10 text-base text-justify ${styles.displayerDetail}`}>{product.detail}</p>
            <div className={`flex justify-center items-center`}>
            <button
              className={`p-1 mx-5 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 ${styles.displayerControler}`}
              onClick={incrementHandler}
            >
              <BiPlus />
            </button>
            <span className={`text-lg ${styles.displayerPrice}`}>{count}</span>
            <button
              className={`p-1 mx-5 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 ${styles.displayerControler}`}
              onClick={decrementHandler}
            >
              <BiMinus />
            </button>
            </div>

            <button className={`py-2 mt-12 rounded-sm bg-gradient-to-r from-yellow-400 to-red-700 ${styles.displayerCartBtn}`}>
              افزودن به سبد خرید
            </button>
          </article>
          </>
      ) : (
        <header className={`text-center text-4xl md:text-5xl flex justify-center items-center ${styles.dispalyerWelcome}`}>
          <h1 className={`bg-clip-text bg-gradient-to-r text-transparent from-yellow-400 to-red-700 `}>خوش آمدید لطفا انتخاب کنید</h1> <BiRestaurant className={`text-yellow-400 inline-block rounded-full mr-2`}/> 
        </header>
      )
    }
    </section>
  );
};
export default Displayer;
