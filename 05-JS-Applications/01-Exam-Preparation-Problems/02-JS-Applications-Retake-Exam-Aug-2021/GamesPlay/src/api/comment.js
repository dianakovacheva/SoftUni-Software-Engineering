import * as api from "./api.js";

const endPoints = {
    byGameId: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    create: '/data/comments',
};

export async function getByGameId(gameId) {
    return api.get(endPoints.byGameId(gameId));
};

export async function createComment(comment) {
    return api.post(endPoints.create, comment);
};

