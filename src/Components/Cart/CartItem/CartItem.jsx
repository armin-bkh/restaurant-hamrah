import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { useReservatioActions } from "../../../Container/ReservationProvider";
import { numberWithCommas } from "../../utils/CommaNumber";

const CartItem = ({ itemID, foodN, foodBP, foodQ }) => {
  const {
    deleteItemCartHandler,
    decrementItemCartHandler,
    incrementItemCartHandler,
    buyOneItemCartHandler,
  } = useReservatioActions();

  const foodBPrice = numberWithCommas(foodBP);

  const foodFPrice = numberWithCommas(foodBP * foodQ);

  return (
    <li
      className={`flex justify-between items-center
       text-xs sm:text-sm md:text-md lg:text-lg
      xl:text-xl mb-5 Dirooz boxShadow py-3 px-4 rounded-md`}
    >
      <span
        className={`text-xs sm:text-sm md:text-md lg:text-lg
       xl:text-xl text-black`}
      >
        {foodN}
      </span>
      <span
        className={`hidden sm:block text-xs sm:text-sm md:text-md
       lg:text-lg xl:text-xl text-black`}
      >
        قیمت واحد: <span className={`Casablanca`}>{foodBPrice()}</span>
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
          className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full
          gradient-bottom cursor-pointer text-white`}
          onClick={() => incrementItemCartHandler(itemID)}
        >
          <BiPlus />
        </button>
        <span
          className={`text-xs sm:text-sm md:text-md  Casablanca lg:text-lg xl:text-xl text-black`}
        >
          {foodQ}
        </span>
        <button
          type="button"
          className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full
          gradient-bottom cursor-pointer text-white`}
          onClick={() => decrementItemCartHandler(itemID)}
        >
          {foodQ > 1 ? <BiMinus /> : <BiTrash />}
        </button>
      </div>
      <span className={`text-xs sm:text-sm lg:text-lg xl:text-xl text-black`}>
        قیمت: <span className={`Casablanca`}>{foodFPrice()}</span>
      </span>
      <div className={`flex items-center justify-between`}>
        <button
          type="button"
          className={`text-blue-400 text-xs sm:text-sm lg:text-lg xl:text-xl Dirooz border border-blue-400 hover:text-white hover:bg-blue-400 transition rounded-md py-1 px-2 md:px-5 ml-1 md:ml-5`}
          onClick={() => buyOneItemCartHandler(foodN)}
        >
          پرداخت
        </button>
        <button
          className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full
        gradient-bottom text-white`}
          type="button"
          onClick={() => deleteItemCartHandler(itemID)}
        >
          <BiTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
