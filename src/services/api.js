import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.neowsapp.com/'
});

export default api;