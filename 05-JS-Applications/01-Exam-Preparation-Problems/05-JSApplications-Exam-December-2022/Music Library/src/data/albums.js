import { get, post, put, del } from "./api.js";

const endPoint = {
    getAll: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    getById: '/data/albums/',
    editById: '/data/albums/',
    deleteById: '/data/albums/',
};

export async function getAllAlbums() {
    return await get(endPoint.getAll);
};

export async function createAlbum(data) {
    return await post(endPoint.create, data);
};

export async function getAlbumById(id) {
    return await get(endPoint.getById + id);
};

export async function editAlbum(id, data) {
    return await put(endPoint.editById + id, data);
};

export async function deleteAlbum(id) {
    return await del(endPoint.deleteById + id);
};