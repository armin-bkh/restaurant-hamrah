import CartList from "../Components/Cart/CartList/CartList";
import DisplayerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import ProductsProvider from "../Container/ProductsProvider";
import { ToastContainer } from "react-toastify";
import "./App.scss";

const App = () => {
  return (
    <ProductsProvider>
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
    </ProductsProvider>
  );
};

export default App;
