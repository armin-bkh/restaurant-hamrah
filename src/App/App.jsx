import Cart from "../Components/Cart/Cart";
import DisplayerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import ProductsProvider from "../Container/ProductsProvider";
import { ToastContainer } from "react-toastify";
import "./App.scss";

const App = () => {
  return (
    <ProductsProvider>
      <Cart />
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
