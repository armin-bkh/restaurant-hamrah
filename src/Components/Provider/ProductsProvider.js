// import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { productsData } from "../../db/products";
import Swal from "sweetalert2"; 
import {
  ProductsContext,
  ProductsDispatcherContext,
} from "../Context/ProductsContext";
// import {
//   DispalyerContext,
//   DispalyerDispathcerContext,
// } from "../Context/DispalyerContext";
// import { CartContext, CartDispatcherContext } from "../Context/CartContext";
// import { AlertContext, AlertDispatcherContext } from "../Context/AlertContext";
// import { CountContext, CountDispatcherContext } from "../Context/CountContext";
// import { queryByDisplayValue } from "@testing-library/react";

let initialState = {
  products: productsData,
  toShow: {},
  message: "",
  visible: "",
  count: 1,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getProducts": {
      const updatedProducts = productsData;
      return updatedProducts;
    }
    case "toShow": {
      return {
        ...state,
        toShow: action.item,
        count: 1,
      };
    }
    case "invisible": {
      return {
        ...state,
        visible: false,
      };
    }
    case "incrementCount": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "decrementCount": {
      if (state.count > 1) {
        return { ...state, count: state.count - 1 };
      }
      return state;
    }
    case "incrementCountItemCart": {
      const index = state.cart.findIndex((item) => item.id === action.id);
      const cartClone = [...state.cart];
      const selectedItem = { ...state.cart[index] };
      if (selectedItem.quantity < 10) {
        selectedItem.quantity++;
        selectedItem.finalPrice =
          selectedItem.basePrice * selectedItem.quantity;
      } else {
        return { ...state, message: "warning", visible: true };
      }
      cartClone[index] = selectedItem;
      return { ...state, cart: cartClone };
    }

    case "decrementCountItemCart": {
      const index = state.cart.findIndex((item) => item.id === action.id);
      const cartClone = [...state.cart];
      const selectedItem = { ...state.cart[index] };
      if (selectedItem.quantity === 1) {
        const filteredCart = cartClone.filter((item) => item.id !== action.id);
        return {
          ...state,
          cart: filteredCart,
          message: "delete",
          visible: true,
        };
      } else {
        selectedItem.quantity--;
        selectedItem.finalPrice =
          selectedItem.basePrice * selectedItem.quantity;
        cartClone[index] = selectedItem;
        return { ...state, cart: cartClone };
      }
    }

    case "addToCart": {
      const newItem = action.item;
      const index = state.cart.findIndex((it) => it.id === newItem.id);
      if (index === -1) {
        return {
          ...state,
          cart: [...state.cart, newItem],
          message: "success",
          visible: true,
          count: 1,
        };
      } else {
        return { ...state, message: "error", visible: true, count: 1 };
      }
    }

    case "deleteItemCart": {
      const filteredCart = state.cart.filter((item) => item.id !== action.id);
      return { ...state, cart: filteredCart, message: "delete", visible: true };
    }

    case "submitCart": {
      alert("سفارش شما ثبت شد");
      return { ...state, cart: [] };
    }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (products.visible) {
      setTimeout(() => {
        dispatch({ type: "invisible" });
      }, 4800);
    }
  }, [products.visible]);
  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatcherContext.Provider value={dispatch}>
        {children}
      </ProductsDispatcherContext.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => {
  const { products } = useContext(ProductsContext);
  return products;
};
export const useCart = () => {
  const { cart } = useContext(ProductsContext);
  return cart;
};
export const useDispaly = () => {
  const { toShow } = useContext(ProductsContext);
  return toShow;
};
export const useAlert = () => {
  const { message, visible } = useContext(ProductsContext);
  return { message, visible };
};
export const useCount = () => {
  const { count } = useContext(ProductsContext);
  return count;
};
export const useProductsAction = () => {
  const dispatch = useContext(ProductsDispatcherContext);

  const addToCartHandler = (item) => {
    dispatch({ type: "addToCart", item: item });
  };

  const deleteItemCartHandler = (id) => {
    dispatch({ type: "deleteItemCart", id: id });
  };

  const incrementItemCartHandler = (id) => {
    dispatch({ type: "incrementCountItemCart", id: id });
  };

  const decrementItemCartHandler = (id) => {
    dispatch({ type: "decrementCountItemCart", id: id });
  };

  const submitCartHandler = () => {
    dispatch({ type: "submitCart" });
  };

  const toShowHandler = (item) => {
    dispatch({ type: "toShow", item: item });
  };

  const incrementCountHandler = () => {
    dispatch({ type: "incrementCount" });
  };

  const decrementCountHandler = () => {
    dispatch({ type: "decrementCount" });
  };

  return {
    addToCartHandler,
    deleteItemCartHandler,
    incrementItemCartHandler,
    decrementItemCartHandler,
    submitCartHandler,
    toShowHandler,
    incrementCountHandler,
    decrementCountHandler,
  };
};
