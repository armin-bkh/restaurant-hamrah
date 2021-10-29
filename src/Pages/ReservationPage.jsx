import { useEffect } from "react";
import CartList from "../Components/Cart/CartList/CartList";
import DisplyerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import Rate from "../Components/Rating/Rating";
import ReservationProvider, { usePaid } from "../Container/ReservationProvider";

const ReservationPage = () => {
  useEffect(() => {
    document.title = "سفارش غذا";
  }, []);

  return (
    <ReservationProvider>
      <CartList />
      <DisplyerContainer />
      <ProductList />
    </ReservationProvider>
  );
};

export default ReservationPage;
