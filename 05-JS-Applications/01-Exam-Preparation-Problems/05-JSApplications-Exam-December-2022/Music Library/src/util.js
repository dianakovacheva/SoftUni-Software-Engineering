const itemName = 'userData';

export function getUserData() {
    return JSON.parse(localStorage.getItem(itemName));
};

export function setUserData(data) {
    localStorage.setItem(itemName, JSON.stringify(data));
};

export function clearUserData() {
    localStorage.removeItem(itemName);
};

// createSubmitHandler is a decorator function
export function createSubmitHandler(ctx, callback) {
    return function (event) {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));

        callback(ctx, formData, event);
    };
};





export function getUserAccessToken() {
    const user = getUserData();
    if (user) {
        return user.accessToken;
    } else {
        return null;
    };
};



export function parseQuerystring(query = '') {
    return Object.fromEntries(query
        .split('&')
        .map(kvp => kvp.split('=')));
};