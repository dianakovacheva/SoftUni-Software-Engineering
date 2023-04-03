import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyBooksById } from "../data/books.js";
import { getUserData } from "../util.js";


const bookCard = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
    `;

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">
        ${books.length > 0
        ? books.map(bookCard)
        : html`<p class="no-books">No books in database!</p>`}
    </ul>
</section>
`;

export async function myBooksView(ctx) {

    const userData = await getUserData();
    const books = await getMyBooksById(userData._id);

    ctx.render(myBooksTemplate(books));
};