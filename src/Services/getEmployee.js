import http from "./httpServices";

export function getEmployee(id){
    return http.get(`/personnel/${id}`);
}