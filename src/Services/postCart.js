import http from "./httpServices";

export function postCart(data, token) {
  const header = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return http.post("/cart.json", data, header);
}
