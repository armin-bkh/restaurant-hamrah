import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {
  decrementCartItem,
  deleteCartItem,
  incrementCartItem,
  payItemCart,
} from "../../../Redux/Reservation/reservationActions";
import { numberWithCommas } from "../../utils/CommaNumber";

const CartItem = ({ food }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const price = food.off
    ? food.price - (food.off * food.price) / 100
    : food.price;

  const incrementHandler = () => {
    dispatch(incrementCartItem(food.id));
  };

  const decrementHandler = () => {
    if (food.quantity === 1)
      addToast("از سبد خرید حذف شد", { appearance: "success" });
    dispatch(decrementCartItem(food.id));
  };

  const deleteHandler = () => {
    dispatch(deleteCartItem(food.id));
    addToast("از سبد خرید حذف شد", { appearance: "success" });
  };

  const buyItemCartHandler = () => {
    dispatch(payItemCart(food));
  };

  return (
    <li
      className={`flex justify-between items-center
       text-xs sm:text-sm md:text-md lg:text-lg
      xl:text-xl mb-5 Dirooz boxShadow py-3 px-2 md:px-4 rounded-md`}
    >
      <span
        className={`text-xs sm:text-sm md:text-md lg:text-lg
       xl:text-xl text-black`}
      >
        {food.title}
      </span>
      <span
        className={`hidden sm:block text-xs sm:text-sm md:text-md
       lg:text-lg xl:text-xl text-black Casablanca`}
      >
        {numberWithCommas(price)}
      </span>
      <div className={`flex justify-between items-center text-black`}>
        <span
          className={`hidden sm:block text-xs sm:text-sm
         md:text-md lg:text-lg xl:text-xl`}
        >
          تعداد:
        </span>
        <button
          type="button"
          className={`text-xs sm:text-sm md:text-base p-0.5 sm:p-1 mx-1 md:mx-2 rounded-full transition hover:bg-blue-400 hover:text-white border cursor-pointer border-blue-400 text-blue-400`}
          onClick={incrementHandler}
        >
          <BiPlus />
        </button>
        <span
          className={`text-xs sm:text-sm md:text-md  Casablanca lg:text-lg xl:text-xl text-black`}
        >
          {food.quantity}
        </span>
        <button
          type="button"
          className={`text-xs cursor-pointer border transition sm:text-sm md:text-base p-0.5 sm:p-1 mx-1 md:mx-2 rounded-full
          ${
            food.quantity > 1
              ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          }`}
          onClick={decrementHandler}
        >
          {food.quantity > 1 ? <BiMinus /> : <BiTrash />}
        </button>
      </div>
      <span className={`text-xs sm:text-sm lg:text-lg xl:text-xl text-black`}>
        قیمت:
        <span className={`Casablanca`}>
          {numberWithCommas(price * food.quantity)}
        </span>
      </span>
      <div className={`flex items-center justify-between`}>
        <button
          type="button"
          className={`text-blue-400 text-xs sm:text-sm lg:text-lg xl:text-xl Dirooz border border-blue-400 
          hover:text-white hover:bg-blue-400 transition rounded-md py-1 px-1 sm:px-2 md:px-5 ml-1 md:ml-5`}
          onClick={buyItemCartHandler}
        >
          پرداخت
        </button>
        <button
          className={`text-xs sm:text-sm md:text-base p-0.5 sm:p-1 rounded-full
        border border-red-600 text-red-600 hover:bg-red-600 transition hover:text-white`}
          type="button"
          onClick={deleteHandler}
        >
          <BiTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
