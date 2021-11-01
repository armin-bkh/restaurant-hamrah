import http from "./httpServices";

export function getAllPersonnel() {
  return http.get("/personnel.json");
}
