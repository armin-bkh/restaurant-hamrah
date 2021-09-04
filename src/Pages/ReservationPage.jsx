import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        draggable
      />
    </ReservationProvider>
  );
};

export default ReservationPage;
