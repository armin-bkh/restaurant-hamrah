import axios from "axios";

axios.defaults.baseURL = "restoyar.firebaseapp.com";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
