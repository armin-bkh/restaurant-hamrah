// import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { productsData } from "../../db/products";
import {
  ProductsContext,
  ProductsDispatcherContext,
} from "../Context/ProductsContext";
import { DispalyerContext } from "../Context/DispalyerContext";
import { CartContext, CartDispatcherContext } from "../Context/CartContext";

const ProductsProvider = ({ children }) => {
  const [toShow, setToShow] = useState({});
  const [cart, setCart] = useState([]);
  let initialState = productsData;
  const reducer = (state, action) => {
    switch (action.type) {
      case "getProducts": {
        // let updatedProducts = null;
        // axios
        // .get()
        // .then(res => updatedProducts = res.data)
        // .catch(err => console.log(err))
        const updatedProducts = productsData;
        return updatedProducts;
      }
      case "toShow": {
        const product = action.product;
        setToShow(product);
        return state;
      }
      case "addToCart": {
        const el = action.item;
        const index = cart.findIndex(it => it.id === el.id)
        if(index === -1){
        setCart([...cart, {
          id: el.id,
          title: el.title,
          quantity: action.quantity,
          basePrice: el.price,
          fullPrice: el.price * action.quantity,
        }]);
      }
        return state;
      }
      case "incrementItemCart": {
        const index = cart.findIndex(item => item.id === action.id);
        const cartClone = [...cart];
        const selectedItem = {...cart[index]};
        if(selectedItem.quantity < 10){
        selectedItem.quantity++;
        selectedItem.fullPrice = selectedItem.basePrice * selectedItem.quantity;
        }
        else alert("ظرفیت پر شده است")
        cartClone[index] = selectedItem;
        setCart(cartClone);
        return state;
      }
      case "decrementItemCart": {
        const index = cart.findIndex(item => item.id === action.id);
        const cartClone = [...cart];
        const selectedItem = {...cart[index]};
        if(selectedItem.quantity === 1){
          const filteredCart = cartClone.filter(item => item.id !== action.id); 
          setCart(filteredCart);
        } else {
          selectedItem.quantity--;
          selectedItem.fullPrice = selectedItem.basePrice * selectedItem.quantity;
          cartClone[index] = selectedItem;
          setCart(cartClone)
        };
        return state;
      }
      case "like": {
        const selectedProduct = state.findIndex(
          (el) => el.id === action.product.id
        );
        const cloneProducts = [...state];
        const selectedItem = { ...state[selectedProduct] };
        selectedItem.like = !selectedItem.like;
        cloneProducts[selectedProduct] = selectedItem;
        return cloneProducts;
      }
      case "submitCart": {
        // axios.post().then().catch();
        alert("سفارش شما ثبت شد");
        setCart([]);
        return state;
      }
      default:
        return state;
    }
  };
  const [products, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "getProducts" });
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatcherContext.Provider value={dispatch}>
        <DispalyerContext.Provider value={toShow}>
          <CartContext.Provider value={cart}>
            <CartDispatcherContext.Provider value={setCart}>
              {children}
            </CartDispatcherContext.Provider>
          </CartContext.Provider>
        </DispalyerContext.Provider>
      </ProductsDispatcherContext.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartDispatcherContext);
export const useProductsAction = () => useContext(ProductsDispatcherContext);
export const useDispaly = () => useContext(DispalyerContext);
