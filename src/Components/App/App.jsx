import CartList from '../Cart/CartList/CartList';
import Displayer from '../Displayer/Displayer';
import ProductList from '../ProductList/ProductList';
import ProductsProvider from '../Provider/ProductsProvider';
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
