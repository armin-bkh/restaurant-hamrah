import http from "./httpServices";

export function postProduct(data){
    const header = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    return http.post("/products", data, header)
}