import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (submitHandler) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${submitHandler} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;


export function loginView(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(ctx, submitHandler)));

    async function submitHandler(ctx, formData, event) {

        if (formData.email === '' || formData.password === '') {
            return alert('All fields required!')
        };

        await login(formData.email, formData.password);
        event.target.reset();
        ctx.page.redirect('/catalog');
    };
};