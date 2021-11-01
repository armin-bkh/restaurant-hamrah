import http from "./httpServices";

export function deleteProduct(id) {
  return http.delete(`/products/${id}.json`);
}
