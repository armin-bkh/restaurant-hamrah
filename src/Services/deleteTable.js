import http from "./httpServices";

export function deleteTable(id) {
  return http.delete(`/tables/${id}.json`);
}
