import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { createComment } from "../api/comment.js";
import { createSubmitHandler } from "../util.js";

const formTemplate = (submitHandler) => html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${submitHandler}class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>`;

export function commentFormView(ctx, isOwner) {
    if (ctx.user && !isOwner) {
        return formTemplate(createSubmitHandler(ctx, submitHandler));
    } else {
        return nothing;
    };
};

async function submitHandler(ctx, formData, event) {
    if (Object.values(formData).some(x => x === '')) {
        return alert('All fields required!');
    };

    const gameId = ctx.params.id;

    await createComment({
        gameId,
        comment: formData.comment,
    });

    event.target.reset();
    ctx.page.redirect(`/details/${gameId}`);
};