import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { useReservatioActions } from "../../../Container/ReservationProvider";
import { numberWithCommas } from "../../utils/CommaNumber";

const CartItem = ({ food }) => {
  const {
    deleteItemCartHandler,
    decrementItemCartHandler,
    incrementItemCartHandler,
    buyOneItemCartHandler,
  } = useReservatioActions();

  const price = food.off
    ? food.price - (food.off * food.price) / 100
    : food.price;

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
        {food.title}
      </span>
      <span
        className={`hidden sm:block text-xs sm:text-sm md:text-md
       lg:text-lg xl:text-xl text-black`}
      >
        قیمت واحد:{" "}
        <span className={`Casablanca`}>{numberWithCommas(price)}</span>
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
          onClick={() => incrementItemCartHandler(food.id)}
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
          className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full
          gradient-bottom cursor-pointer text-white`}
          onClick={() => decrementItemCartHandler(food.id)}
        >
          {food.quantity > 1 ? <BiMinus /> : <BiTrash />}
        </button>
      </div>
      <span className={`text-xs sm:text-sm lg:text-lg xl:text-xl text-black`}>
        قیمت:{" "}
        <span className={`Casablanca`}>
          {numberWithCommas(price * food.quantity)}
        </span>
      </span>
      <div className={`flex items-center justify-between`}>
        <button
          type="button"
          className={`text-blue-400 text-xs sm:text-sm lg:text-lg xl:text-xl Dirooz border border-blue-400 hover:text-white hover:bg-blue-400 transition rounded-md py-1 px-2 md:px-5 ml-1 md:ml-5`}
          onClick={() =>
            buyOneItemCartHandler({
              name: food.title,
              price: food.price * food.quantity,
              qty: food.quantity,
            })
          }
        >
          پرداخت
        </button>
        <button
          className={`text-xs sm:text-sm md:text-base p-1 mx-2 rounded-full
        gradient-bottom text-white`}
          type="button"
          onClick={() => deleteItemCartHandler(food.id)}
        >
          <BiTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
