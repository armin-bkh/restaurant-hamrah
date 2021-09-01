import { useContext, useEffect, useReducer } from "react";
import Swal from "sweetalert2";
import {
  ReservationContext,
  ReservationDispatcherContext,
} from "../Context/ReservationContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { postCart } from '../Services/postCart';
import { getOneProduct } from '../Services/getOneProduct';

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
            type: "error",
            message: "از سبد خرید شما حذف شد",
          },
        };
      } else {
        selectedItem.quantity--;
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
        notification: { type: "error", message: "از سبد خرید شما حذف شد" },
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
      return {...state, cart: ''};
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

  useEffect(() => {
    if (reservationData.notification) {
      const type = reservationData.notification.type;
      if (type === "success")
        toast.success(reservationData.notification.message);
      if (type === "error")
        toast.error(reservationData.notification.message);
      if (type === "info")
        toast.info(reservationData.notification.message);
      if (type === "warning")
        toast.warn(reservationData.notification.message);
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
        const totalPrice = data.price * item.quantity;
        dispatch({
          type: "addToCart",
          data: { ...data, quantity: item.quantity, finalPrice: data.price * item.quantity },
          totalPrice: totalPrice,
        });
      } catch (err) {
        dispatch({ type: "errorGetOneProduct", message: err, status: "error" });
      }
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