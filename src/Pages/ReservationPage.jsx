import { useEffect } from "react";
import { Provider } from "react-redux";
import CartList from "../Components/Cart/CartList/CartList";
import DisplyerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import Rate from "../Components/Rating/Rating";
import store from "../Redux/store";

const ReservationPage = () => {
  useEffect(() => {
    document.title = "سفارش غذا";
  }, []);

  return (
    <Provider store={store}>
      <CartList />
      <DisplyerContainer />
      <ProductList />
    </Provider>
  );
};

export default ReservationPage;
