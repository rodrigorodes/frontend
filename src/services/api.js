import axios from 'axios';

const api = axios.create({
    baseURL: 'https://airbackend.herokuapp.com'
});

export default api;