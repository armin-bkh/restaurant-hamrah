import {
  FETCH_RESERVATION_FAILURE,
  FETCH_RESERVATION_REQUEST,
  FETCH_RESERVATION_SUCCESS,
  POST_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
} from "./reservationTypes";

const initialState = {
  reservationData: [],
  error: "",
  loading: false,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATION_REQUEST: {
      return state;
    }
    case FETCH_RESERVATION_FAILURE: {
      return state;
    }
    case FETCH_RESERVATION_SUCCESS: {
      return state;
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
