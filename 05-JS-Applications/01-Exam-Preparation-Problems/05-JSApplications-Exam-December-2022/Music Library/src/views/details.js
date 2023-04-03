import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAlbumById, deleteAlbum } from "../data/albums.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">${album.title}</p>
        <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">0</span></div>

        <div id="action-buttons">
            ${album.albumOwner
            ? html`
            <a href="/details/${album._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : null
        }

            ${album.canLike
            ? html`
            <a href="" id="like-btn">Like</a>`
            : null
        }

        </div>
    </div>
</section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const album = await getAlbumById(id);

    const userData = getUserData();
    if (userData) {
        album.albumOwner = userData._id === album._ownerId;
        album.canLike = userData._id && !album.albumOwner;
    }

    ctx.render(detailsTemplate(album, onDelete));

    async function onDelete() {

        const choice = confirm(`Are you sure you want to delete ${album.title}`);

        if (choice) {
            await deleteAlbum(id);

            ctx.page.redirect('/catalog');
        };
    };
};