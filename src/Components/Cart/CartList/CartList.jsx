import React from "react";
import { useCart, useProductsAction } from "../../Provider/ProductsProvider";
import CartItem from "../CartItem/CartItem";
import styles from "./CartList.module.scss";
import { BiCartAlt } from "react-icons/bi";

const CartList = () => {
  const cart = useCart();
  const dispatch = useProductsAction();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({type: "submitCart"})
  };

  return (
    <section className={`mx-6 my-5 p-6 ${styles.cartContainer}`}>
      {!cart.length ? (
        <header className={`flex items-center justify-center bg-clip-text bg-gradient-to-r text-transparent from-yellow-400 to-red-700 ${styles.title}`}>
          <h1
            className={`text-xl sm:text-3xl md:text-5xl`}
          >
          </h1>
            <BiCartAlt className={`ml-2 text-red-700`} /> سبد سفارش شما خالی است
        </header>
      ) : (
        <form onSubmit={submitHandler}>
          <ul>
            {cart.map((item) => (
              <CartItem
                itemID={item.id}
                key={item.id}
                foodN={item.title}
                foodFP={item.fullPrice}
                foodBP={item.basePrice}
                foodQ={item.quantity}
              />
            ))}
          </ul>
          <button
            className={`text-sm w-full md:text-md lg:text-lg xl:text-xl py-2 mt-10 rounded-sm bg-gradient-to-r from-yellow-400 to-red-700 ${styles.submitCart}`}
          >
            ثبت سفارش
          </button>
        </form>
      )}
    </section>
  );
};

export default CartList;
