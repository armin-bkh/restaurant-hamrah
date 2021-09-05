import CartList from "../Components/Cart/CartList/CartList";
import DisplyerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import ReservationProvider from "../Container/ReservationProvider";
import { ToastContainer } from "react-toastify";

const ReservationPage = () => {
  return (
    <ReservationProvider>
      <div className={`bgDark min-h-screen`}>
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
      </div>
    </ReservationProvider>
  );
};

export default ReservationPage;
