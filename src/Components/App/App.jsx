import Displayer from '../Displayer/Displayer';
import ProductList from '../ProductList/ProductList';
import ProductsProvider from '../Provider/ProductsProvider';
import './App.scss';

const App = () => {
  return (
    <ProductsProvider>
      <Displayer />
      <ProductList />
    </ProductsProvider>
  );
}

export default App;
