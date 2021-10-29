import { getOneProduct } from "../../Services/getOneProduct";
import {
  CALC_TOTALPRICE,
  DECREMENT_CART_ITEM,
  FETCH_PRODUCT_ITEM_FAILURE,
  FETCH_PRODUCT_ITEM_REQUEST,
  FETCH_PRODUCT_ITEM_SUCCESS,
  INCREMENT_CART_ITEM,
  POST_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
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

export const incrementCartItem = (payload) => {
  return { type: INCREMENT_CART_ITEM, payload };
};

export const decrementCartItem = (payload) => {
  return { type: DECREMENT_CART_ITEM, payload };
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
    dispatch(caclTotalPrice());
  };
};
