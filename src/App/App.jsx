import CartList from "../Components/Cart/CartList/CartList";
import DisplayerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import ReservationProvider from "../Container/ReservationProvider";

const App = () => {
  return (
    <ReservationProvider>
      <CartList />
      <DisplayerContainer />
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

export default App;
