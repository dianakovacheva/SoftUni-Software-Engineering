import { post, get } from "./api.js";

const endPoints = {
    applications: '/data/applications',
    getById: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    getByOfferIdUserId: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

export async function apply(offerId) {
    return post(endPoints.applications, { offerId });
};

export async function getApplicationsCount(offerId) {
    return get(endPoints.getById(offerId));
};

export async function getUserApplication(offerId, userId) {
    return await get(endPoints.getByOfferIdUserId(offerId, userId));
};

