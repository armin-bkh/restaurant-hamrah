import http from "./httpServices";

export function postUserFilter(value) {
  return http.post("/userFilters.json", value);
}
