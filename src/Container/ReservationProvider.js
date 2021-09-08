import { useContext, useEffect, useReducer } from "react";
import Swal from "sweetalert2";
import {
  ReservationContext,
  ReservationDispatcherContext,
} from "../Context/ReservationContext";
import { postCart } from '../Services/postCart';
import { getOneProduct } from '../Services/getOneProduct';
import { useToasts } from 'react-toast-notifications';

let initialState = {
  cart: [],
  totalPrice: 0,
  notification: "",
  productId: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getProductsFromDB": {
      return { ...state, products: action.data };
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
      selectedItem.quantity++;
      selectedItem.finalPrice = selectedItem.price * selectedItem.quantity;
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
          notification: {
            type: "success",
            message: "از سبد خرید شما حذف شد",
          },
        };
      } else {
        selectedItem.quantity--;
        selectedItem.finalPrice = selectedItem.price * selectedItem.quantity;
        cartClone[index] = selectedItem;
        return { ...state, cart: cartClone};
      }
    }
    case "addToCart": {
      if (state.cart.some((item) => item.id === action.data.id)) {
        return {
          ...state,
          notification: {
            type: "error",
            message: "این غذا در سبد خرید شما وجود دارد",
          },
        };
      }
      return {
        ...state,
        totalPrice: action.totalPrice + state.totalPrice,
        cart: [...state.cart, action.data],
        notification: { type: "success", message: "به سبد خرید شما افزوده شد" },
      };
    }
    case "deleteItemCart": {
      const filteredCart = state.cart.filter((item) => item.id !== action.id);
      return {
        ...state,
        cart: filteredCart,
        notification: { type: "success", message: "از سبد خرید شما حذف شد" },
      };
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
      return {...state, cart: '', totalPrice: 0};
    }
    case "calcTotalPrice": {
      const cartItemsPrice = state.cart.map(item => item.finalPrice);
      if(!cartItemsPrice.length){
        return {...state, totalPrice: 0}
      }
      const totalPrice = cartItemsPrice.reduce((total, num) => total + num);
      return {...state, totalPrice: totalPrice}
    }
    case "errorGetOneProduct": {
      return {
        ...state, 
        notification: {type: action.status, message: action.message}
      }
    }
    default:
      return state;
  }
};

const ReservationProvider = ({ children }) => {
  const [reservationData, dispatch] = useReducer(reducer, initialState);
  const { addToast } = useToasts();

  useEffect(() => {
    if (reservationData.notification) {
      const type = reservationData.notification.type;
      if (type === "success")
      addToast(reservationData.notification.message, {appearance: type});
      if (type === "error")
      addToast(reservationData.notification.message, {appearance: type});
      if (type === "info")
      addToast(reservationData.notification.message, {appearance: type});
      if (type === "warning")
      addToast(reservationData.notification.message, {appearance: type});
    }
  }, [reservationData.notification]);

  return (
    <ReservationContext.Provider value={reservationData}>
      <ReservationDispatcherContext.Provider value={dispatch}>
        {children}
      </ReservationDispatcherContext.Provider>
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;

export const useCart = () => {
  const { cart } = useContext(ReservationContext);
  return cart;
};
export const useProductId = () => {
  const { productId } = useContext(ReservationContext);
  return { productId };
};
export const useReservatioActions = () => {
  const dispatch = useContext(ReservationDispatcherContext);

  const addToCartHandler = async (item) => {
      try {
        const { data } = await getOneProduct(item.id)
        await dispatch({
          type: "addToCart",
          data: { ...data, quantity: item.quantity, finalPrice: data.price * item.quantity },
        });
        dispatch({type: "calcTotalPrice"})
      } catch (err) {
        dispatch({ type: "errorGetOneProduct", message: err, status: "error" });
      }
  };

  const deleteItemCartHandler = async (id) => {
    await dispatch({ type: "deleteItemCart", id: id });
    dispatch({type: "calcTotalPrice"})
  };

  const incrementItemCartHandler = async (id) => {
   await  dispatch({ type: "incrementCountItemCart", id: id });
    dispatch({type: "calcTotalPrice"})
  };

  const decrementItemCartHandler = async (id) => {
    await dispatch({ type: "decrementCountItemCart", id: id });
    dispatch({type: "calcTotalPrice"})
  };

  const submitCartHandler = async (cart) => {
    try{
      const token = "SECURE POST";
      await postCart(cart, token);
      dispatch({ type: "submitCart" });
    }
    catch(err){
      console.log(err);
    }
  };

  const toShowHandler = (id) => {
    dispatch({ type: "toShow", id: id });
  };


  return {
    addToCartHandler,
    deleteItemCartHandler,
    incrementItemCartHandler,
    decrementItemCartHandler,
    submitCartHandler,
    toShowHandler,
  };
};
export const useTotalPrice = () =>{
  const { totalPrice } = useContext(ReservationContext);
  return totalPrice
}