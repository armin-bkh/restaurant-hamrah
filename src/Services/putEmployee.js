import http from "./httpServices";

export function putEmployee(id, value){
    return http.put(`/personnel/${id}`, value)
}