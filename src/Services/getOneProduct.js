import http from "./httpServices";

export function getOneProduct(productId) {
  return http.get(`/products/${productId}.json`);
}
