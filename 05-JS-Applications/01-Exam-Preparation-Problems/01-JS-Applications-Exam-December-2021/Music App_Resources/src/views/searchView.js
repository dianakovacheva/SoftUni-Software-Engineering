import { html } from "../../node_modules/lit-html/lit-html.js";
import { search } from "../services/albumService.js";
import { albumTemplate } from "../templates/albumTemplate.js";

const searchTemplate = (searchHandler, albums, isLogged) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${searchHandler} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <div class="search-result">
        ${albums.length > 0
            ? albums.map(x => albumTemplate(x, isLogged))
            : html`<p class="no-result">No result.</p>`
        }
    </div>
    
</section>`;

export const searchView = (ctx) => {
    const searchHandler = () => {
        let searchInputElement = document.getElementById('search-input');

        if (searchInputElement.value === '') {
            alert('Input field required!');
            return;
        };

        search(searchInputElement.value)
            .then(foundAlbums => {
                const isLogged = Boolean(ctx.user);
                ctx.render(searchTemplate(searchHandler, foundAlbums, isLogged));
            })
    }

    ctx.render(searchTemplate(searchHandler, []));
}