import http from "./httpServices";

export function deleteEmployee(id) {
  return http.delete(`/personnel/${id}.json`);
}
