import http from "./httpServices";

export function getAllTable(){
    return http.get("/tables")
}