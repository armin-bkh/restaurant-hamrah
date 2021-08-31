import http from "./httpServices";

export function postProduct(data){
    return http.post("/products", data)
}