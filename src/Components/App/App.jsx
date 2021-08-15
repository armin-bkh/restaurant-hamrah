import ProductList from '../ProductList/ProductList';
import ProductsProvider from '../Provider/ProductsProvider';
import './App.scss';

const App = () => {
  return (
    <ProductsProvider>
      <ProductList />
    </ProductsProvider>
  );
}

export default App;
