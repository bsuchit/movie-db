import axios from "axios";

import ENDPOINTS from "./constants";

export default function fetchMovies(){
    return axios.get(ENDPOINTS.FETCH_MOVIES)
    .then(response => response.data)
    .catch(err => err);
}

export function fetchPoster(title){
    return axios.get(`${ENDPOINTS.FETCH_POSTER}&query=star wars: ${title}`)
    .then(response => response.data)
    .catch(err => err);
}