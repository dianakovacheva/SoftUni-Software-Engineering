import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import { editAlbum, getAlbumById } from "../data/albums.js";

const editTemplate = (album, submitHandler) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form @submit=${submitHandler} class="edit-form">
                <input type="text" name="singer" .value=${album.singer} id="album-singer" placeholder="Singer/Band" />
                <input type="text" name="album" .value=${album.album} id="album-album" placeholder="Album" />
                <input type="text" name="imageUrl" .value=${album.imageUrl} id="album-img" placeholder="Image url" />
                <input type="text" name="release" .value=${album.release} id="album-release" placeholder="Release date" />
                <input type="text" name="label" .value=${album.label} id="album-label" placeholder="Label" />
                <input type="text" name="sales" .value=${album.sales} id="album-sales" placeholder="Sales" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export async function editView(ctx) {

    const id = ctx.params.id;
    const album = await getAlbumById(id);


    ctx.render(editTemplate(album, createSubmitHandler(ctx, submitHandler)));

    async function submitHandler(ctx, formData, event) {

        if (Object.values(formData).some(x => x === '')) {
            return alert('All fields required!');
        };

        await editAlbum(id, {
            singer: formData.singer,
            album: formData.album,
            imageUrl: formData.imageUrl,
            release: formData.release,
            label: formData.label,
            sales: formData.sales,
        });

        event.target.reset();
        ctx.page.redirect(`/details/${id}`);
    };
};