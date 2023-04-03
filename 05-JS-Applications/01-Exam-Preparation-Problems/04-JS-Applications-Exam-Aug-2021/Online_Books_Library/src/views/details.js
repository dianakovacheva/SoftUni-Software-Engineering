import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getBookById } from "../data/books.js";
import { getUserData } from "../util.js";
import {deleteBook} from "../data/books.js"

const detailsTemplate = (book, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">

            ${book.isOwner 
            ? html` 
            <a class="button" href="/catalog/${book._id}/edit">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : nothing
        } 
        
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${book.canLike
            ? html`<a class="button" href="#">Like</a>`
            : null
        }


           
           
            <!-- Bonus -->

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const book = await getBookById(id);
    const userData = getUserData();
    
    if (userData) {
        book.isOwner = userData._id === book._ownerId;
        book.canLike = userData._id && !book.isOwner;
    };

    ctx.render(detailsTemplate(book, onDelete));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete ${book.title}?`);

        if(choice) {
            await deleteBook(id);
            ctx.page.redirect('/catalog');
        };
    };
};