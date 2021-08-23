// import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { productsData } from "../../db/products";
import {
  ProductsContext,
  ProductsDispatcherContext,
} from "../Context/ProductsContext";
import {
  DispalyerContext,
  DispalyerDispathcerContext,
} from "../Context/DispalyerContext";
import { CartContext, CartDispatcherContext } from "../Context/CartContext";
import { AlertContext, AlertDispatcherContext } from "../Context/AlertContext";
import { CountContext, CountDispatcherContext } from "../Context/CountContext";

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
          <DispalyerDispathcerContext.Provider
            value={{ setToShow: setToShow, setCount: setCount }}
          >
            <CartContext.Provider value={cart}>
              <CartDispatcherContext.Provider
                value={{
                  setCart: setCart,
                  setCount: setCount,
                  setMessage: setMessage,
                  setVisible: setVisible,
                }}
              >
                <AlertContext.Provider
                  value={{ message: message, visible: visible }}
                >
                  <AlertDispatcherContext.Provider
                    value={{ setMessage: setMessage, setVisible: setVisible }}
                  >
                    <CountContext.Provider value={count}>
                      <CountDispatcherContext.Provider value={setCount}>
                        {children}
                      </CountDispatcherContext.Provider>
                    </CountContext.Provider>
                  </AlertDispatcherContext.Provider>
                </AlertContext.Provider>
              </CartDispatcherContext.Provider>
            </CartContext.Provider>
          </DispalyerDispathcerContext.Provider>
        </DispalyerContext.Provider>
      </ProductsDispatcherContext.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useCart = () => useContext(CartContext);
export const useCartActions = () => {
  const cart = useContext(CartContext);
  const { setCart, setVisible, setCount, setMessage } = useContext(
    CartDispatcherContext
  );

  const addToCartHandler = (item) => {
    const newItem = item;
    const index = cart.findIndex((it) => it.id === item.id);
    console.log(index, item.id);
    if (index === -1) {
      setCart([...cart, newItem]);
      setCount(1);
      setMessage("success");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    } else {
      setMessage("error");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  };

  const deleteItemCartHandler = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
    setMessage("delete");
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  const incrementItemCartHandler = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    const cartClone = [...cart];
    const selectedItem = { ...cart[index] };
    if (selectedItem.quantity < 10) {
      selectedItem.quantity++;
      selectedItem.fullPrice = selectedItem.basePrice * selectedItem.quantity;
    } else {
      setMessage("warning");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
    cartClone[index] = selectedItem;
    setCart(cartClone);
  };

  const decrementItemCartHandler = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    const cartClone = [...cart];
    const selectedItem = { ...cart[index] };
    if (selectedItem.quantity === 1) {
      const filteredCart = cartClone.filter((item) => item.id !== id);
      setCart(filteredCart);
      setMessage("delete");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    } else {
      selectedItem.quantity--;
      selectedItem.fullPrice = selectedItem.basePrice * selectedItem.quantity;
      cartClone[index] = selectedItem;
      setCart(cartClone);
    }
  };

  const submitCartHandler = () =>{
    // axios.post().then().catch();
    alert("سفارش شما ثبت شد");
    setCart([]);
  }

  return {
    addToCartHandler,
    deleteItemCartHandler,
    incrementItemCartHandler,
    decrementItemCartHandler,
    submitCartHandler
  };
};
export const useProductsAction = () => useContext(ProductsDispatcherContext);
export const useDispaly = () => useContext(DispalyerContext);
export const useDisplayAction = () => {
  const { setToShow, setCount } = useContext(DispalyerDispathcerContext);

  const toShowHandler = (product) => {
    setToShow(product);
    setCount(1);
  };

  return { toShowHandler };
};
export const useAlert = () => useContext(AlertContext);
export const useCount = () => useContext(CountContext);
export const useCountActions = () => {
  const count = useContext(CountContext);
  const setCount = useContext(CountDispatcherContext);
  const { setMessage, setVisible } = useContext(AlertDispatcherContext);

  const incrementCountHandler = () => {
    if (count < 10) setCount((prevCount) => prevCount + 1);
    else {
      setMessage("warning");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  };

  const decrementCountHandler = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return { incrementCountHandler, decrementCountHandler };
};