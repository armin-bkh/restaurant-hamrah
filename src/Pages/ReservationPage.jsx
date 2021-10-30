import { useEffect } from "react";
import { Provider } from "react-redux";
import CartList from "../Components/Cart/CartList/CartList";
import Displayer from "../Components/Displayer/Displayer";
import ProductList from "../Components/ProductList/ProductList";
import store from "../Redux/store";

const ReservationPage = () => {
  useEffect(() => {
    document.title = "سفارش غذا";
  }, []);

  return (
    <Provider store={store}>
      <CartList />
      <Displayer />
      <ProductList />
    </Provider>
  );
};

export default ReservationPage;
