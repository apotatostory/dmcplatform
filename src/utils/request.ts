import axios from 'axios'

let request = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 5000
})

request.interceptors.request.use(config => {
    return config;
})

request.interceptors.response.use(response => {
    // response success
    return response.data;
}, error => {
    // error
    let status = error.response.status;
    console.error(error, status);

    switch(status) {
        case 401:
        default:
            break;
    }
})

export default request;