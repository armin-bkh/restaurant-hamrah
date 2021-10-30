import { getOneProduct } from "../../Services/getOneProduct";
import { postCart } from "../../Services/postCart";
import {
  ACCEPT_PAID,
  CALC_TOTALPRICE,
  CHECK_IS_PAID,
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
  POST_ITEM_CART,
  POST_ITEM_CART_FAILURE,
  POST_ITEM_CART_REQUEST,
  POST_ITEM_CART_SUCCESS,
  REMAIN_RESERV,
  SET_PRODUCT_ID,
} from "./reservationTypes";

export const setProductId = (payload) => {
  return { type: SET_PRODUCT_ID, payload };
};

export const fetchProductItemRequset = () => {
  return { type: FETCH_PRODUCT_ITEM_REQUEST };
};

export const fetchProductItemFailure = (payload) => {
  return { type: FETCH_PRODUCT_ITEM_FAILURE, payload };
};

export const fetchProductItemSuccess = (payload) => {
  return { type: FETCH_PRODUCT_ITEM_SUCCESS, payload };
};

export const caclTotalPrice = () => {
  return { type: CALC_TOTALPRICE };
};

export const postCartRequest = () => {
  return { type: POST_CART_REQUEST };
};

export const postCartFailure = () => {
  return { type: POST_CART_FAILURE };
};

export const postCartSuccess = () => {
  return { type: POST_CART_SUCCESS };
};

export const payCartRequest = () => {
  return { type: PAY_CART_REQUEST };
};

export const payCartFailure = (payload) => {
  return { type: PAY_CART_FAILURE, payload };
};

export const payCartSuccess = () => {
  return { type: PAY_CART_SUCCESS };
};

export const incrementCartItem = (payload) => {
  return { type: INCREMENT_CART_ITEM, payload };
};

export const decrementCartItem = (payload) => {
  return { type: DECREMENT_CART_ITEM, payload };
};

export const deleteCartItem = (payload) => {
  return { type: DELETE_CART_ITEM, payload };
};

export const remainReserv = () => {
  return { type: REMAIN_RESERV };
};

export const postItemCartRequest = () => {
  return { type: POST_ITEM_CART_REQUEST };
};

export const postItemCartFailure = (payload) => {
  return { type: POST_ITEM_CART_FAILURE, payload };
};

export const postItemCartSuccess = (payload) => {
  return { type: POST_ITEM_CART_SUCCESS, payload };
};
export const acceptPaid = () => {
  return { type: ACCEPT_PAID };
};

export const fetchCartItem = (item) => {
  return async (dispatch) => {
    dispatch(fetchProductItemRequset());
    try {
      const { data } = await getOneProduct(item.id);
      dispatch(
        fetchProductItemSuccess({
          ...data,
          quantity: item.quantity,
          finalPrice: data.off
            ? (data.price - (data.off * data.price) / 100) * item.quantity
            : data.price * item.quantity,
        })
      );
    } catch (error) {
      dispatch(fetchProductItemFailure(error.message));
    }
  };
};

export const payCart = (cart) => {
  return async (dispatch) => {
    dispatch(payCartRequest());
    try {
      await postCart(cart);
      dispatch(payCartSuccess());
    } catch (error) {
      dispatch(payCartFailure(error.message));
    }
  };
};

export const payItemCart = (item) => {
  return async (dispatch) => {
    dispatch(postItemCartRequest());
    try {
      await postCart([item]);
      dispatch(postItemCartSuccess(item));
    } catch (error) {
      dispatch(postItemCartFailure(error.message));
    }
  };
};

export const submitCart = (cart) => {
  return async (dispatch) => {
    dispatch(postCartRequest());
    try {
      await postCart(cart);
      dispatch(postCartSuccess());
    } catch (error) {
      dispatch(postCartFailure(error.message));
    }
  };
};
