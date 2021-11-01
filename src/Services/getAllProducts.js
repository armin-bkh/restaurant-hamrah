import http from "./httpServices";

export function getAllProducts() {
  return http.get("/products.json");
}
