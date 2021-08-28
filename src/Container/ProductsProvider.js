import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { productsData } from "../db/products";
import Swal from "sweetalert2";
import {
  ProductsContext,
  ProductsDispatcherContext,
} from "../Context/ProductsContext";
import { useToasts } from "react-toast-notifications";

let initialState = {
  products: "",
  alert: "",
  cart: [],
  productId: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getProductsFromDB": {
      return {...state, products: action.data}
    }
    case "toShow": {
      return {
        ...state,
        productId: action.id,
      };
    }
    case "incrementCountItemCart": {
      const index = state.cart.findIndex((item) => item.id === action.id);
      const cartClone = [...state.cart];
      const selectedItem = { ...state.cart[index] };
      if (selectedItem.quantity < 10) {
        selectedItem.quantity++;
      } else {
        return state;
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
        };
      } else {
        selectedItem.quantity--;
        cartClone[index] = selectedItem;
        return { ...state, cart: cartClone };
      }
    }
    case "addToCart": {
      return {...state, cart: [...state.cart, action.data]}
    }
    case "deleteItemCart": {
      const filteredCart = state.cart.filter((item) => item.id !== action.id);
      return { ...state, cart: filteredCart};
    }
    case "setAlert":{
      return {...state, alert: {type: action.style, message: action.message}}
    }
    case "submitCart": {
      Swal.fire({
        title: "ثبت گردید",
        text: "سفارش شما با موفقیت ثبت گردید",
        icon: "success",
        confirmButtonText: "تایید",
        showCloseButton: true,
        timer: 10000,
        backdrop: true,
      });
      console.log("submited")
      return { ...state, cart: [] };
    }
    case "filterProducts": {
      if(action.value === 'all') return { ...state, products: productsData };
      const filterdProducts = productsData.filter(pr => pr.filter === action.value);
      return {...state, products: filterdProducts};
    }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
      const getProducts = async () =>{
        const  { data } = await axios.get("http://localhost:3001/products");
        dispatch({type: "getProductsFromDB", data: data})
      }
      getProducts()
    }, []);

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
  const { alert } = useContext(ProductsContext);
  return { alert };
};
export const useProductId = () =>{
  const { productId } = useContext(ProductsContext);
  return { productId };
}
export const useProductsAction = () => {
  const dispatch = useContext(ProductsDispatcherContext);

  const addToCartHandler = (item) => {
    const setCart = async () =>{
      try{
        const { data } = await axios.get(`http://localhost:3001/products/${item.id}`)
        dispatch({ type: "addToCart", data: {...data, quantity: item.quantity}});
        dispatch({type: "setAlert", message: "به سبد خرید اضافه شد", style: 'success'});
      }
      catch(err){
        dispatch({type: "setAlert", message: err, style: 'error'});
      }
    }
    setCart();
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

  const submitCartHandler = (cart) => {
    const submitCart = async () =>{
      try{
      await axios.post("http://localhost:3001/cart", cart);
      await dispatch({type: "submitCart"})
      }
      catch(err){
        dispatch({type: "setAlert", message: err, style: 'error'});
      }
    }
    submitCart();
  };

  const toShowHandler = (id) => {
    dispatch({ type: "toShow", id: id });
  };

  const incrementCountHandler = () => {
    dispatch({ type: "incrementCount" });
  };

  const decrementCountHandler = () => {
    dispatch({ type: "decrementCount" });
  };

  const filterProductsHandler = (value) => {
    dispatch({type: "filterProducts", value: value});
  }

  return {
    addToCartHandler,
    deleteItemCartHandler,
    incrementItemCartHandler,
    decrementItemCartHandler,
    submitCartHandler,
    toShowHandler,
    incrementCountHandler,
    decrementCountHandler,
    filterProductsHandler
  };
};