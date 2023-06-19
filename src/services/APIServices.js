import axios from "axios";

import ENDPOINTS from "./constants";

export default function fetchMovies(){
    return axios.get(ENDPOINTS.FETCH_MOVIES)
    .then(response => response.data)
    .catch(err => err);
}