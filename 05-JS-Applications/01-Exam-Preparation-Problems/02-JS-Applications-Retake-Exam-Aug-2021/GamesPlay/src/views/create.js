import { html } from "../../node_modules/lit-html/lit-html.js";
import { create } from "../api/games.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (submitHandler) => html`
<section id="create-page" class="auth">
    <form @submit=${submitHandler} id="create">
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`;

export function createView(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, submitHandler)));
};

async function submitHandler(ctx, formData, event) {
    if (Object.values(formData).some(x => x === '')) {
        return alert('All fields required!');
    };

    await create({
        title: formData.title,
        category: formData.category,
        maxLevel: formData.maxLevel,
        imageUrl: formData.imageUrl,
        summary: formData.summary,
    });

    event.target.reset();
    ctx.page.redirect('/');
};