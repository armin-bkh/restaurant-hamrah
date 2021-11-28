import React, { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { BiCartAlt } from "react-icons/bi";
import { numberWithCommas } from "../../utils/CommaNumber";
import "../../../scss/main.scss";
import Rate from "../../Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  caclTotalPrice,
  payCart,
  submitCart,
} from "../../../Redux/Reservation/reservationActions";

const CartList = () => {
  const { cart, paid, totalPrice, loading, error } = useSelector(
    (state) => state.reservation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(caclTotalPrice());
  }, [cart]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitCart(cart));
  };

  return !paid ? (
    <section className={`mx-0 md:mx-6 p-3 md:p-6 bgLight rounded-md`}>
      {!cart.length ? (
        <header
          className={`flex items-center justify-center bg-clip-text
          color-gradient Casablanca`}
        >
          <h1 className={`flex items-center text-lg sm:text-xl md:text-3xl`}>
            <BiCartAlt className={`ml-2 text-blue-400`} />
            سبد سفارشات شما خالی است
          </h1>
        </header>
      ) : (
        <form onSubmit={submitHandler}>
          <ul className={`mb-11`}>
            {cart &&
              cart.length &&
              cart.map((item) => <CartItem key={item.id} food={item} />)}
          </ul>
          <h1
            className={`text-sm w-full md:text-md lg:text-lg xl:text-xl 
          Dirooz text-black`}
          >
            مبلغ قابل پرداخت:
            <span className={`Casablanca`}>{numberWithCommas(totalPrice)}</span>
            تومان
          </h1>
          <fieldset className={`mt-3 flex items-center`}>
            <button
              type="submit"
              className={`text-sm flex-grow md:text-md lg:text-lg xl:text-xl
             py-2 rounded-md gradient Casablanca tracking-widest text-white ml-3`}
            >
              ثبت سفارش
            </button>
            <button
              type="button"
              className={`px-5 py-2 Dirooz text-sm text-blue-400 border border-blue-400 hover:text-white hover:bg-blue-400 transition rounded-md md:text-md lg:text-lg xl:text-xl`}
              onClick={() => dispatch(payCart(cart))}
            >
              پرداخت
            </button>
          </fieldset>
        </form>
      )}
    </section>
  ) : (
    <Rate />
  );
};

export default CartList;
