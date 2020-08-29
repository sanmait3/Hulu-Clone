//library used to make request to any server or endpoint - Axios

import axios from 'axios';

//make an instance of axios

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
