import { clearUserData, setUserData } from "../util.js";
import * as api from "./api.js";

const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(email, password) {
    const result = await api.post(endPoints.login, { email, password });
    setUserData(result);

    // Optional return result
    return result;
};

export async function register(email, password) {
    const result = await api.post(endPoints.register, { email, password });
    setUserData(result);

    // Optional return result
    return result;
};

export async function logout() {
    api.get(endPoints.logout);
    clearUserData();
};





// export async function login(ctx, userData, event) {
//     let checkPassed = true;
//     Object.values(userData).forEach(el => {
//         if (el === '') {
//             checkPassed = false;
//         };
//     });

//     if (checkPassed) {
//         const res = await api.post(endPoints.login, userData);
//         if (res.accessToken) {
//             setUserData(res);
//             ctx.page.redirect('/');
//         } else {
//             alert('Login failed!');
//         };
//     } else {
//         alert('All fields are required!');
//     };
// };
