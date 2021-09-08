import CartList from "../Components/Cart/CartList/CartList";
import DisplyerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import ReservationProvider from "../Container/ReservationProvider";

const ReservationPage = () => {
  return (
    <ReservationProvider>
        <CartList />
        <DisplyerContainer />
        <ProductList />
    </ReservationProvider>
  );
};

export default ReservationPage;
