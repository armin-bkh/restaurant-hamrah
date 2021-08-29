import Cart from "../Components/Cart/Cart";
import DisplayerContainer from "../Components/DisplayerContainer/DisplayerContainer";
import ProductList from "../Components/ProductList/ProductList";
import ProductsProvider from "../Container/ProductsProvider";
import "./App.scss";

const App = () => {
  return (
    <ProductsProvider>
      <Cart />
      <DisplayerContainer />
      <ProductList />
    </ProductsProvider>
  );
};

export default App;
