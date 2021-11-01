import http from "./httpServices";

export function deleteProductFilter(id) {
  return http.delete(`/foodFilters/${id}.json`);
}
