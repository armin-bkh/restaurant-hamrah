import { combineReducers } from "redux";
import reservationReducer from "./Reservation/reservationReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  reservation: reservationReducer,
});

export default rootReducer;
