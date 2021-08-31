import http from "./httpServices";

export function postrCart(data){
    return http.post("/cart", data)
}