import {
  CALC_TOTALPRICE,
  FETCH_PRODUCT_ITEM_FAILURE,
  FETCH_PRODUCT_ITEM_REQUEST,
  FETCH_PRODUCT_ITEM_SUCCESS,
  POST_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  SET_PRODUCT_ID,
} from "./reservationTypes";

const initialState = {
  cart: [],
  totalPrice: 0,
  paid: false,
  notification: "",
  productId: "",
  loading: false,
  error: false,
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
    case CALC_TOTALPRICE: {
      const cartItemsPrice = state.cart.map((item) => item.finalPrice);
      if (!cartItemsPrice.length) {
        return { ...state, totalPrice: 0 };
      }
      const totalPrice = cartItemsPrice.reduce((total, num) => total + num);
      return { ...state, totalPrice };
    }
    case POST_CART_REQUEST: {
      return state;
    }
    case POST_CART_FAILURE: {
      return state;
    }
    case POST_CART_SUCCESS: {
      return state;
    }
    default:
      return state;
  }
};

export default reservationReducer;
