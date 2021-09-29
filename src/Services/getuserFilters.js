import http from "./httpServices";

export function getUserFilters(){
    return http.get('/userFilters');
}