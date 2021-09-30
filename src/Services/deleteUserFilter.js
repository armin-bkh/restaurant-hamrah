import http from './httpServices';

export function deleteUserFilter(id){
    return http.delete(`/userFilters/${id}`)
}