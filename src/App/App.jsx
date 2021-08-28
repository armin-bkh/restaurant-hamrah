import CartList from '../Components/Cart/CartList/CartList';
import DisplayerContainer from '../Components/DisplayerContainer/DisplayerContainer';
import ProductList from '../Components/ProductList/ProductList';
import ProductsProvider from '../Container/ProductsProvider';
import './App.scss';

const App = () => {
  return (
    <ProductsProvider>
      <CartList />
      <DisplayerContainer />
      <ProductList />
    </ProductsProvider>
  );
}

export default App;
