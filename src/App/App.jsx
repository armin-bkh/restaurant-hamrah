import { ToastProvider } from "react-toast-notifications";
import Cart from "../Components/Cart/Cart";
import DisplayerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import ProductsProvider from "../Container/ProductsProvider";
import "./App.scss";

const App = () => {
  return (
    <ToastProvider>
      <ProductsProvider>
        <Cart />
        <DisplayerContainer />
        <ProductList />
      </ProductsProvider>
    </ToastProvider>
  );
};

export default App;
