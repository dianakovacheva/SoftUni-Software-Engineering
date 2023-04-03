import * as api from "./api.js";

const endPoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    all: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/',
    editById: '/data/games/',
    deleteById: '/data/games/',
};

export async function getRecent() {
    return api.get(endPoints.recent);
};

export async function getAll() {
    return api.get(endPoints.all);
};

export async function getById(id) {
    return api.get(endPoints.byId + id);
};

export async function create(data) {
    return api.post(endPoints.create, data);
};

export async function edit(id, data) {
    return api.put(endPoints.editById + id, data);
};

export async function deleteById(id) {
    return api.del(endPoints.deleteById + id);
};
