import CartList from '../Components/Cart/CartList/CartList';
import Displayer from '../Components/Displayer/Displayer';
import ProductList from '../Components/ProductList/ProductList';
import ProductsProvider from '../Container/ProductsProvider';
import './App.scss';

const App = () => {
  return (
    <ProductsProvider>
      <CartList />
      <Displayer />
      <ProductList />
      
    </ProductsProvider>
  );
}

export default App;
