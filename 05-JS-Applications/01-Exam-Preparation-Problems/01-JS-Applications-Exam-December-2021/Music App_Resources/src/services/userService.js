import * as request from "./requester.js";
import * as authService from "./authService.js";

const baseURL = 'http://localhost:3030';


export const login = (email, password) =>
    request.post(`${baseURL}/users/login`, { email, password })
        .then(user => {
            authService.saveUser(user);
            return user;
        });

export const register = (email, password) =>
    request.post(`${baseURL}/users/register`, { email, password })
        .then(user => {
            authService.saveUser(user);

            return user;
        });

export const logout = () =>
    fetch(`${baseURL}/users/logout`, { headers: { 'X-Authorization': authService.getToken() } })
        .then(() => {
            authService.deleteUser();
        });
