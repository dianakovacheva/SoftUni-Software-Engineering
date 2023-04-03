import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";


const loginTemplate = (submitHandler) => html`
<section id="login-page" class="login">
    <form @submit=${submitHandler} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`;


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