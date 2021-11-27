import { SET_USER_DATA, GET_USER_DATA } from "./userTypes";

export const setUserData = (payload) => {
  return { type: SET_USER_DATA, payload };
};

export const getUserData = () => {
  return { type: GET_USER_DATA };
};
