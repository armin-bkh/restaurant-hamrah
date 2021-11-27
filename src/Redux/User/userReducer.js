import { GET_USER_DATA, SET_USER_DATA } from "./userTypes";

const initialValues = "";

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      localStorage.setItem("restaurantUser", JSON.stringify(action.payload));
      return action.payload;
    }
    case GET_USER_DATA: {
      const userData = JSON.parse(localStorage.getItem("restaurantUser"));
      return userData;
    }
    default:
      return state;
  }
};

export default userReducer;
