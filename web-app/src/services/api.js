import axios from 'axios';
const baseURL = 'http://localhost:3400/api/v1';

var api = axios.create({
    baseURL: baseURL
});

var authApi = axios.create({
    baseURL: baseURL+"/auth",
    headers: {
        Authorization: sessionStorage.getItem('Authorization')
    }
});

function updateApiToken(){
    authApi = axios.create({
        baseURL: baseURL+"/auth",
        headers: {
            Authorization: sessionStorage.getItem('Authorization')
        }
    });
}

export {api, authApi, updateApiToken};