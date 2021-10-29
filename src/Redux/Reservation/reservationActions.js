import {
  FETCH_RESERVATION_FAILURE,
  FETCH_RESERVATION_REQUEST,
  FETCH_RESERVATION_SUCCESS,
  POST_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
} from "./reservationTypes";

export const fetchReservationRequest = () => {
  return { type: FETCH_RESERVATION_REQUEST };
};
export const fetchReservationFailure = (error) => {
  return { type: FETCH_RESERVATION_FAILURE, payload: error };
};
export const fetchReservationSuccess = (products) => {
  return { type: FETCH_RESERVATION_SUCCESS, payload: products };
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
