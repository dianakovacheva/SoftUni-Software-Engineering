import * as request from "./requester.js";

const baseURL = 'http://localhost:3030/data/albums';

export const getAll = () => {
    return request.get(`${baseURL}?sortBy=_createdOn%20desc&distinct=name`);
};

export const create = (albumData) => request.post(baseURL, albumData);

export const getDetails = (albumId) => {
    return request.get(`${baseURL}/${albumId}`);
};

export const update = (id, albumData) => request.put(`${baseURL}/${id}`, albumData);

export const deleteAlbum = (albumId) => request.del(`${baseURL}/${albumId}`);

export const search = (searchText) => {
    let query = encodeURIComponent(`name LIKE "${searchText}"`);
    return request.get(`${baseURL}?where=${query}`);
};