import { clearUserData, setUserData } from "../util.js";
import { post, get } from "./api.js";

const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(email, password) {
    const result = await post(endPoints.login, { email, password });
    setUserData(result);

    // Optional return result
    return result;
};

export async function register(email, password) {
    const result = await post(endPoints.register, { email, password });
    setUserData(result);

    // Optional return result
    return result;
};

export async function logout() {
    get(endPoints.logout);
    clearUserData();
};