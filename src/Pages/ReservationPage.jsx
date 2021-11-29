import { useEffect } from "react";
import CartList from "../Components/Cart/CartList/CartList";
import Displayer from "../Components/Displayer/Displayer";
import ProductList from "../Components/ProductList/ProductList";

const ReservationPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.title = "سفارش غذا";
  }, []);

  return (
    <>
      <CartList />
      <Displayer />
      <ProductList />
    </>
  );
};

export default ReservationPage;
