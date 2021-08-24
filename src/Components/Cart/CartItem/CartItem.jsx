import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { useProductsAction } from "../../Provider/ProductsProvider";
// import { numberWithCommas } from "../../utils/CommaNumber";
import styles from "./CartItem.module.scss";

const CartItem = ({ itemID, foodN, foodFP, foodBP, foodQ }) => {
  const { deleteItemCartHandler, decrementItemCartHandler, incrementItemCartHandler } = useProductsAction();

  // const foodFPrice = numberWithCommas(foodFP);
  // const foodBPrice = numberWithCommas(foodBP);

  const decrementItemHandler = () =>{
    decrementItemCartHandler(itemID)
  }
  const incrementItemHandler = () => {
    incrementItemCartHandler(itemID)
  }
  const deleteItemHandler = () =>{
    deleteItemCartHandler(itemID)
  }

  return (
    <li
      className={`flex justify-between items-center text-sm md:text-md lg:text-lg mb-5 ${styles.cartItem}`}
    >
      <span className={`text-sm md:text-md lg:text-lg ${styles.white}`}>
        {foodN}
      </span>
      <span className={`hidden md:block text-sm md:text-md lg:text-lg ${styles.white}`}>
        قیمت واحد: {foodBP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <div className={`flex justify-between items-center ${styles.white}`}>
        <span className={`hidden md:block text-sm md:text-md lg:text-lg`} >تعداد:</span>
        <button
        type="button"
          className={`text-sm md:text-md lg:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`}
          onClick={incrementItemHandler}
        >
          <BiPlus />
        </button>
        <span className={`text-sm md:text-md lg:text-lg ${styles.white}`}>
          {foodQ}
        </span>
        <button
        type="button"
          className={`text-sm md:text-md lg:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`}
          onClick={decrementItemHandler}
        >
          {foodQ > 1 ? <BiMinus /> : <BiTrash />}
        </button>
      </div>
      <span className={`text-sm md:text-md lg:text-lg ${styles.white}`}>
        قیمت: {foodFP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <button className={`text-sm md:text-md lg:text-base p-1 mx-2 rounded-full bg-gradient-to-b from-gray-800 cursor-pointer to-gray-900 ${styles.btn}`} type="button" onClick={deleteItemHandler}><BiTrash /></button>
    </li>
  );
};

export default CartItem;
