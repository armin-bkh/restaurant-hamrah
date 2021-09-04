import http from "./httpServices";

export function getInfRes(){
    return http.get('/resinfo');
}