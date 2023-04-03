import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import { createAlbum } from "../data/albums.js";

const createTemplate = (submitHandler) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${submitHandler} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function createView(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, submitHandler)));

    async function submitHandler(ctx, formData, event) {

        if (Object.values(formData).some(x => x === '')) {
            return alert('All fields required!');
        };

        await createAlbum(
            {
                singer: formData.singer,
                album: formData.album,
                imageUrl: formData.imageUrl,
                release: formData.release,
                label: formData.label,
                sales: formData.sales,
            }
        );

        event.target.reset();
        ctx.page.redirect('/catalog');
    };
};