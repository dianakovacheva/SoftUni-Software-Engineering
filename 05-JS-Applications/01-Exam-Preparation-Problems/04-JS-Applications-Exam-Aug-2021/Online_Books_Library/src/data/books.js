import { get, post, put, del } from "./api.js";

const endPoints = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    createBook: '/data/books',
    getById: '/data/books/',
    editBookById: '/data/books/',
    deleteBookById: '/data/books/',
    getByUserId: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getAllBooks() {
    return await get(endPoints.allBooks);
};

export async function createBook(data) {
    return await post(endPoints.createBook, data);
};

export async function getBookById(id) {
    return await get(endPoints.getById + id);
};

export async function editBook(id, data) {
    return await put(endPoints.editBookById + id, data);
};

export async function deleteBook(id) {
    return await del(endPoints.deleteBookById + id);
};

export async function getMyBooksById(userId) {
    return await get(endPoints.getByUserId(userId));
};