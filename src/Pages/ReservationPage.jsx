import { useEffect } from "react";
import CartList from "../Components/Cart/CartList/CartList";
import Displayer from "../Components/Displayer/Displayer";
import ProductList from "../Components/ProductList/ProductList";

const ReservationPage = () => {
  useEffect(() => {
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
