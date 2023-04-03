import { clearUserData, getUserAccessToken } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    };

    const token = getUserAccessToken();

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok !== true) {
            /* The HTTP 403 Forbidden response status code indicates that the server understands the request
             but refuses to authorize it */
            if (response.status === 403) {
                clearUserData();
            };
            const error = await response.json();
            throw new Error(error.message);
        };

        /* The HTTP 204 No Content success status response code indicates that a request has succeeded, 
        but that the client doesn't need to navigate away from its current page */
        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }
    }
    catch (err) {
        alert(err.message);
        throw err;
    };
};


export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');





// function createOptions(method = 'get', data) {


//     if (data !== undefined) {
//         options.headers['Content-Type'] = 'application/json';
//         options.body = JSON.stringify(data);
//     };

//     const userData = getUserData();

//     if (userData !== null) {
//         options.headers['X-Authorization'] = userData.token;
//     };

//     return options;
// };

// export async function get(url) {
//     return request(url, createOptions());
// };

// export async function post(url, data) {
//     return request(url, createOptions('post', data));
// };

// export async function put(url, data) {
//     return request(url, createOptions('put', data));
// };

// export async function del(url) {
//     return request(url, createOptions('delete'));
// };

// export async function login(email, password) {
//     const result = await post('/users/login', { email, password });

//     const userData = {
//         email: result.email,
//         id: result._id,
//         token: result.accessToken,
//     };

//     setUserData(userData);
// };

// export async function register(email, password) {
//     const result = await post('/users/register', { email, password });

//     const userData = {
//         email: result.email,
//         id: result._id,
//         token: result.accessToken,
//     };

//     return result;
// }

// export async function logout() {
//     await get('/users/logout');
//     clearUserData();
// };