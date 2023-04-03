import { get, post, put, del } from "../data/api.js";

const endPoints = {
    getAll: '/data/offers?sortBy=_createdOn%20desc',
    create: '/data/offers',
    byId: '/data/offers/',
    edit: '/data/offers/',
    delete: '/data/offers/',
};

export async function getAllOffers() {
    return await get(endPoints.getAll);
};

export async function createOffer(data) {
    return await post(endPoints.create, data);
};

export async function getById(id) {
    return await get(endPoints.byId + id);
};

export async function editOffer(id, data) {
    return await put(endPoints.edit + id, data);
};

export async function deleteOffer(id) {
    return await del(endPoints.delete + id);
};