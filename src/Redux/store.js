import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reservationReducer from "./Reservation/reservationReducer";

const store = createStore(
  reservationReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
