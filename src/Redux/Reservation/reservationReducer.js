import Swal from "sweetalert2";
import {
  CALC_TOTALPRICE,
  DECREMENT_CART_ITEM,
  DELETE_CART_ITEM,
  FETCH_PRODUCT_ITEM_FAILURE,
  FETCH_PRODUCT_ITEM_REQUEST,
  FETCH_PRODUCT_ITEM_SUCCESS,
  INCREMENT_CART_ITEM,
  PAY_CART_FAILURE,
  PAY_CART_REQUEST,
  PAY_CART_SUCCESS,
  POST_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  POST_ITEM_CART_FAILURE,
  POST_ITEM_CART_REQUEST,
  POST_ITEM_CART_SUCCESS,
  REMAIN_RESERV,
  SET_PRODUCT_ID,
} from "./reservationTypes";

const initialState = {
  cart: [],
  totalPrice: 0,
  paid: false,
  productId: "",
  loading: false,
  error: "",
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_ID: {
      return { ...state, productId: action.payload };
    }
    case FETCH_PRODUCT_ITEM_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_PRODUCT_ITEM_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    case FETCH_PRODUCT_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.payload],
        error: "",
      };
    }
    case INCREMENT_CART_ITEM: {
      const cloneCart = [...state.cart];
      const index = cloneCart.findIndex((item) => item.id === action.payload);
      const selectedCartItem = { ...cloneCart[index] };
      selectedCartItem.quantity++;
      selectedCartItem.finalPrice = selectedCartItem.off
        ? (selectedCartItem.price -
            (selectedCartItem.off * selectedCartItem.price) / 100) *
          selectedCartItem.quantity
        : selectedCartItem.price * selectedCartItem.quantity;
      cloneCart[index] = selectedCartItem;
      return { ...state, cart: cloneCart };
    }
    case DECREMENT_CART_ITEM: {
      const cloneCart = [...state.cart];
      const index = cloneCart.findIndex((item) => item.id === action.payload);
      const selectedCartItem = { ...cloneCart[index] };
      if (selectedCartItem.quantity === 1) {
        return {
          ...state,
          cart: cloneCart.filter((item) => item.id !== action.payload),
        };
      }
      selectedCartItem.quantity--;
      selectedCartItem.finalPrice = selectedCartItem.off
        ? (selectedCartItem.price -
            (selectedCartItem.off * selectedCartItem.price) / 100) *
          selectedCartItem.quantity
        : selectedCartItem.price * selectedCartItem.quantity;
      cloneCart[index] = selectedCartItem;
      return { ...state, cart: cloneCart };
    }
    case DELETE_CART_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CALC_TOTALPRICE: {
      const cartItemsPrice = state.cart.map((item) => item.finalPrice);
      if (!cartItemsPrice.length) {
        return { ...state, totalPrice: 0 };
      }
      const totalPrice = cartItemsPrice.reduce((total, num) => total + num);
      return { ...state, totalPrice };
    }
    case POST_CART_REQUEST: {
      return { ...state, loading: true };
    }
    case POST_CART_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    case POST_CART_SUCCESS: {
      Swal.fire({
        title: "?????? ??????????",
        text: "?????????? ?????? ???? ???????????? ?????? ??????????",
        icon: "success",
        confirmButtonText: "??????????",
        showCloseButton: true,
        timer: 10000,
        backdrop: true,
      });
      return { ...state, loading: false, cart: [], paid: true };
    }
    case PAY_CART_REQUEST: {
      return { ...state, loading: true };
    }
    case PAY_CART_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    case PAY_CART_SUCCESS: {
      Swal.fire({
        title: "???????????? ????",
        text: `???????????? ???? ???????????? ?????????? ????`,
        icon: "success",
        confirmButtonText: "??????????",
        showCloseButton: true,
        timer: 10000,
        backdrop: true,
      });
      return { ...state, loading: false, cart: [], paid: true };
    }
    case POST_ITEM_CART_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case POST_ITEM_CART_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case POST_ITEM_CART_SUCCESS: {
      Swal.fire({
        title: "???????????? ????",
        text: `?????????? ${
          action.payload.quantity > 1 ? `${action.payload.quantity}????????` : ""
        } ${action.payload.title} ???????????? ????`,
        icon: "success",
        confirmButtonText: "??????????",
        showCloseButton: true,
        timer: 10000,
        backdrop: true,
      });
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        loading: false,
        error: "",
        cart: filteredCart,
        paid: !filteredCart.length && true,
      };
    }
    case REMAIN_RESERV: {
      return { ...state, paid: false };
    }
    default:
      return state;
  }
};

export default reservationReducer;
