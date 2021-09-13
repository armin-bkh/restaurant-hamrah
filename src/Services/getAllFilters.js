import http from './httpServices';

export function getAllFilters(){
    return http.get("/filters");
}