import http from './httpServices';

export function postFilter(data){
    return http.post("/filters", data);
}