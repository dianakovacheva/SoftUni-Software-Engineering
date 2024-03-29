import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../services/albumService.js";
import { albumTemplate } from "../templates/albumTemplate.js";


const catalogTemplate = (albums, user) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.length > 0 
        ? albums.map(x => albumTemplate(x, Boolean(user)))
        : html`<p>No Albums in Catalog!</p>`
        }
        
</section>`;

export const catalogView = (ctx) => {
    getAll()
        .then(albums => {
            ctx.render(catalogTemplate(albums, ctx.user));
        });
};