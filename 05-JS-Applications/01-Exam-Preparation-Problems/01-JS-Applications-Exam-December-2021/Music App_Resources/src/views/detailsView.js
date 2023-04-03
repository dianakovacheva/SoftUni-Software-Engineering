import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getDetails, deleteAlbum } from "../services/albumService.js";
import { getUser } from "../services/authService.js";

const detailsTemplate = (album, deleteHandler) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            ${album._ownerId === getUser()._id
            ? html`<div class="actionBtn">
                <a href="/albums/details/edit/${album._id}" class="edit">Edit</a>
                <a @click=${()=> deleteHandler(album._id)} href="#" class="remove">Delete</a>
            </div>`
            : nothing}

        </div>
    </div>
</section>`;

export const detailsView = (ctx) => {
    const deleteHandler = (albumId) => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            deleteAlbum(albumId)
                .then(res => {
                    if (res._deletedOn) {
                        ctx.page.redirect('/catalog');
                    };
                });
        };
    };

    getDetails(ctx.params.albumId)
        .then(album => {
            ctx.render(detailsTemplate(album, deleteHandler));
        });
};
