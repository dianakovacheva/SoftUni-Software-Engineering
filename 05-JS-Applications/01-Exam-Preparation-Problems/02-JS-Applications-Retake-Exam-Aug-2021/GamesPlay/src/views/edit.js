import { html } from "../../node_modules/lit-html/lit-html.js";
import { edit, getById } from "../api/games.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (game, submitHandler) => html`
<section id="edit-page" class="auth">
    <form @submit=${submitHandler} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export async function editView(ctx) {
    const gameId = ctx.params.id;
    const game = await getById(gameId);

    ctx.render(editTemplate(game, createSubmitHandler(ctx, submitHandler)));
};

async function submitHandler(ctx, formData, event) {
    const gameId = ctx.params.id;

    if (Object.values(formData).some(x => x === '')) {
        return alert('All fields required!');
    }

    await edit(gameId, {
        title: formData.title,
        category: formData.category,
        maxLevel: formData.maxLevel,
        imageUrl: formData.imageUrl,
        summary: formData.summary,
    });

    event.target.reset();
    ctx.page.redirect('/details/' + gameId);
};