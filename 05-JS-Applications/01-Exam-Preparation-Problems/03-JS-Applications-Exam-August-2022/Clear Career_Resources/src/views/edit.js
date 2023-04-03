import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import { editOffer, getById } from "../data/offers.js";

const editTemplate = (offer, submitHandler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${submitHandler} class="edit-form">
            <input type="text" name="title" .value=${offer.title} id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" .value=${offer.imageUrl} id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" .value=${offer.category} id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" .value=${offer.description} placeholder="Description"
                rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" .value=${offer.requirements} placeholder="Requirements"
                rows="4" cols="50"></textarea>
            <input type="text" name="salary" .value=${offer.salary} id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editView(ctx) {

    const id = ctx.params.id;
    const offer = await getById(id);

    ctx.render(editTemplate(offer, createSubmitHandler(ctx, submitHandler)));

    async function submitHandler(ctx, formData, event) {

        if (Object.values(formData).some(x => x === '')) {
            return alert('All fields required!');
        };

        await editOffer(id, {
            title: formData.title,
            imageUrl: formData.imageUrl,
            category: formData.category,
            description: formData.description,
            requirements: formData.requirements,
            salary: formData.salary,
        });

        event.target.reset();
        ctx.page.redirect('/catalog/' + id);
    };
};