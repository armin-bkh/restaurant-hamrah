import axios from "axios";

axios.defaults.baseURL = "https://restoyar-default-rtdb.firebaseio.com/";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;

//? sas