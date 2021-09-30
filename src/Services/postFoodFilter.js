import http from './httpServices';

export function postFoodFilter(data){
    return http.post("/foodFilters", data);
}