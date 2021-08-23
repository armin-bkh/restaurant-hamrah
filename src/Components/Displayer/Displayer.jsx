import { useDispaly, useCount, useCountActions, useCartActions } from "../Provider/ProductsProvider";
import { BiPlus, BiMinus, BiRestaurant } from "react-icons/bi";
import styles from "./Displayer.module.scss";

const Displayer = () => {
  const count = useCount();
  const product = useDispaly();
  const { addToCartHandler } = useCartActions();
  const {decrementCountHandler, incrementCountHandler} = useCountActions();


  const clickHandler = () => {
    const item = {id: product.id, title: product.title, quantity: count, basePrice: product.price, fullPrice: product.price * count};
    addToCartHandler(item);
  }

  return (
      
        <section className={`mx-6 p-6 ${styles.displayerContainer}`}>
    {
      product.title ? (
          <>
          <img
            className={` ${styles.displayerImg}`}
            src={product.img}
            alt={product.title}
          />
          <article className={` ${styles.displyerInformation}`}>
            <h1 className={`text-3xl lg:text-5xl xl:text-4xl text-center ${styles.displayerTitle}`}>{product.title}</h1>
            <h3 className={`text-md lg:text-lg xl:text-2xl mt-4 text-yellow-400 text-center ${styles.displayerPrice}`}>{product.price} تومان</h3>
            <h3 className={`text-md lg:text-lg xl:text-2xl mt-10 mb-2 text-yellow-400 ${styles.displayerTitle}`}>توضیحات:</h3>
            <p className={`mb-10 text-sm md:text-md lg:text-base text-justify ${styles.displayerDetail}`}>{product.detail}</p>
            <div className={`flex justify-center items-center`}>
            <button
              type="button"
              className={`text-sm md:text-md lg:text-base p-1 mx-5 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.displayerControler}`}
              onClick={incrementCountHandler}
            >
              <BiPlus />
            </button>
            <span className={`text-sm md:text-md lg:text-lg xl:text-xl ${styles.displayerPrice}`}>{count}</span>
            <button
            type="button"
              className={`text-sm md:text-md lg:text-base p-1 mx-5 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.displayerControler}`}
              onClick={decrementCountHandler}
            >
              <BiMinus />
            </button>
            </div>

            <button type="submit" onClick={clickHandler} className={`text-sm md:text-md lg:text-lg xl:text-xl py-2 mt-12 rounded-sm bg-gradient-to-r from-yellow-400 to-red-700 ${styles.displayerCartBtn}`}>
              افزودن به سبد خرید
            </button>
          </article>
          </>
      ) : (
        <header className={`text-center text-xl sm:text-3xl md:text-5xl flex justify-center items-center ${styles.dispalyerWelcome}`}>
        <BiRestaurant className={`text-red-700 inline-block rounded-full ml-2`}/> <h1 className={`bg-clip-text bg-gradient-to-r text-transparent from-yellow-400 to-red-700 `}>خوش آمدید لطفا انتخاب کنید</h1>  
        </header>
      )
    }
    </section>
  );
};
export default Displayer;