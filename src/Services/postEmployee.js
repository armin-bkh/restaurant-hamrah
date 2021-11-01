import http from "./httpServices";

export function postEmployee(value) {
  return http.post("/personnel.json", value);
}
