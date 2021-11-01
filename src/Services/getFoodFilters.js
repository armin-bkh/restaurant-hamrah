import http from "./httpServices";

export function getFoodFilters() {
  return http.get("/foodFilters.json");
}
