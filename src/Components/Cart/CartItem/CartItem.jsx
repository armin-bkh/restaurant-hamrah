import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { useProductsAction } from "../../../Container/ProductsProvider";
import { numberWithCommas } from "../../utils/CommaNumber";
import styles from "./CartItem.module.scss";

const CartItem = ({ itemID, foodN, foodBP, foodQ }) => {
  const { deleteItemCartHandler, decrementItemCartHandler, incrementItemCartHandler } = useProductsAction();

  const foodBPrice = numberWithCommas(foodBP);

  const foodFPrice = numberWithCommas(foodBP * foodQ);
    
  return (
    <li
      className={`flex justify-between items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl mb-5 ${styles.cartItem}`}
    >
      <span className={`text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ${styles.white}`}>
        {foodN}
      </span>
      <span className={`hidden sm:block text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ${styles.white}`}>
        قیمت واحد: {foodBPrice()}
      </span>
      <div className={`flex justify-between items-center ${styles.white}`}>
        <span className={`hidden sm:block text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl`} >تعداد:</span>
        <button
        type="button"
          className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`}
          onClick={()=> incrementItemCartHandler(itemID)}
        >
          <BiPlus />
        </button>
        <span className={`text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ${styles.white}`}>
          {foodQ}
        </span>
        <button
        type="button"
          className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`}
          onClick={()=> decrementItemCartHandler(itemID)}
        >
          {foodQ > 1 ? <BiMinus /> : <BiTrash />}
        </button>
      </div>
      <span className={`text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ${styles.white}`}>
        قیمت: {foodFPrice()}
      </span>
      <button className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`} type="button" onClick={()=> deleteItemCartHandler(itemID)}><BiTrash /></button>
    </li>
  );
};

export default CartItem;
