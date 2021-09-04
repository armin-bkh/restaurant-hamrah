import React from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./CartList.module.scss";
import { BiCartAlt } from "react-icons/bi";
import { numberWithCommas } from "../../utils/CommaNumber";
import { useCart, useReservatioActions, useTotalPrice } from "../../../Container/ReservationProvider";

const CartList = () => {
  const cart = useCart();
  const {submitCartHandler} = useReservatioActions();
  const totalPrice = useTotalPrice();

  const totalPricewithComma = numberWithCommas(totalPrice);

  const submitHandler = (e) => {
    e.preventDefault();
    submitCartHandler(cart);
  };

  return (
    <section className={`mx-6 mt-5 p-6 ${styles.cartContainer}`}>
      {!cart.length ? (
        <header className={`flex items-center justify-center bg-clip-text
         bg-gradient-to-r text-transparent from-yellow-400 to-red-700
        FPArsoo`}>
          <h1
            className={`flex items-center text-lg sm:text-xl md:text-3xl`}
          >
          <BiCartAlt className={`ml-2 text-red-700`} /> 
          سبد سفارشات شما خالی است
          </h1>
        </header>
      ) : (
        <form onSubmit={submitHandler}>
          <ul className={`mb-11`}>
            {cart.map((item) => (
              <CartItem
                itemID={item.id}
                key={item.id}
                foodN={item.title}
                foodBP={item.price}
                foodQ={item.quantity}
              />
            ))}
          </ul>
          <h1 className={`text-sm w-full md:text-md lg:text-lg xl:text-xl 
          FPArsoo text-white`}>مبلغ قابل پرداخت: {totalPricewithComma()} تومان</h1>
          <button
          type="submit"
            className={`text-sm w-full md:text-md lg:text-lg xl:text-xl
             py-2 mt-3 rounded-sm bg-gradient-to-r from-yellow-400
              to-red-700 FPArsoo tracking-widest text-white`}
          >
            ثبت سفارش
          </button>
        </form>
      )}
    </section>
  );
};

export default CartList;
