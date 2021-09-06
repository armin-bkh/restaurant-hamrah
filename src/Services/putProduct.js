import http from "./httpServices";

export function putProduct(id, value){
    return http.put(`/products/${id}`, value)
}