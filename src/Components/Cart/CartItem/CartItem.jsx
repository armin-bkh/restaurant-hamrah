import { BiPlus, BiMinus } from "react-icons/bi";
import { useProductsAction } from "../../Provider/ProductsProvider";
import styles from "./CartItem.module.scss";

const CartItem = ({ itemID, foodN, foodFP, foodBP, foodQ }) => {
  const dispatch = useProductsAction();


  const decrementItemCartHandler = () =>{
    dispatch({ type: "decrementItemCart", id: itemID })
  }
  const incrementItemCartHandler = () => {
    dispatch({ type: "incrementItemCart", id: itemID })
  }

  return (
    <li
      className={`flex justify-between items-center text-sm md:text-md lg:text-lg mb-5 ${styles.cartItem}`}
    >
      <span className={`text-sm md:text-md lg:text-lg ${styles.white}`}>
        {foodN}
      </span>
      <span className={`text-sm md:text-md lg:text-lg ${styles.white}`}>
        قیمت واحد: {foodBP}
      </span>
      <div className={`flex justify-between items-center ${styles.white}`}>
        تعداد:
        <button
        type="button"
          className={`text-sm md:text-md lg:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`}
          onClick={incrementItemCartHandler}
        >
          <BiPlus />
        </button>
        <span className={`text-sm md:text-md lg:text-lg ${styles.white}`}>
          {foodQ}
        </span>
        <button
        type="button"
          className={`text-sm md:text-md lg:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`}
          onClick={decrementItemCartHandler}
        >
          <BiMinus />
        </button>
      </div>
      <span className={`text-sm md:text-md lg:text-lg ${styles.white}`}>
        قیمت: {foodFP}
      </span>
    </li>
  );
};

export default CartItem;
