// import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { productsData } from "../../db/products";
import {
  ProductsContext,
  ProductsDispatcherContext,
} from "../Context/ProductsContext";
import { DispalyerContext } from "../Context/DispalyerContext";
import { CartContext } from "../Context/CartContext";
import { AlertContext } from "../Context/AlertContext";
import { CountContext } from "../Context/CountContext";

const ProductsProvider = ({ children }) => {
  const [toShow, setToShow] = useState({});
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(1);
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
        setCount(1);
        return state;
      }
      case "addToCart": {
        const newItem = action.item;
        const index = cart.findIndex((it) => it.id === action.item.id);
        if (index === -1) {
          setCart([...cart, newItem]);
          setCount(1);
          setMessage("success");
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 10000);
        } else {
          setMessage("error");
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 10000);
        }
        return state;
      }
      case "incrementItemCart": {
        const index = cart.findIndex((item) => item.id === action.id);
        const cartClone = [...cart];
        const selectedItem = { ...cart[index] };
        if (selectedItem.quantity < 10) {
          selectedItem.quantity++;
          selectedItem.fullPrice =
            selectedItem.basePrice * selectedItem.quantity;
        } else {
          setMessage("warning");
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 10000);
        }
        cartClone[index] = selectedItem;
        setCart(cartClone);
        return state;
      }
      case "decrementItemCart": {
        const index = cart.findIndex((item) => item.id === action.id);
        const cartClone = [...cart];
        const selectedItem = { ...cart[index] };
        if (selectedItem.quantity === 1) {
          const filteredCart = cartClone.filter(
            (item) => item.id !== action.id
          );
          setCart(filteredCart);
          setMessage("delete");
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 10000);
        } else {
          selectedItem.quantity--;
          selectedItem.fullPrice =
            selectedItem.basePrice * selectedItem.quantity;
          cartClone[index] = selectedItem;
          setCart(cartClone);
        }
        return state;
      }
      case "deleteItemCart": {
        const filteredCart = cart.filter((item) => item.id !== action.id);
        setCart(filteredCart);
        setMessage("delete");
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
        }, 10000);
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
      case "incrementCount": {
        if (count < 10) setCount((prevCount) => prevCount + 1);
        else {
          setMessage("warning");
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 10000);
        }
        return state;
      }
      case "decrementCount": {
        setCount((prevCount) => prevCount - 1);
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
            <AlertContext.Provider
              value={{ message: message, visible: visible }}
            >
              <CountContext.Provider value={count}>
                {children}
              </CountContext.Provider>
            </AlertContext.Provider>
          </CartContext.Provider>
        </DispalyerContext.Provider>
      </ProductsDispatcherContext.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useCart = () => useContext(CartContext);
export const useProductsAction = () => useContext(ProductsDispatcherContext);
export const useDispaly = () => useContext(DispalyerContext);
export const useAlert = () => useContext(AlertContext);
export const useCount = () => useContext(CountContext);
