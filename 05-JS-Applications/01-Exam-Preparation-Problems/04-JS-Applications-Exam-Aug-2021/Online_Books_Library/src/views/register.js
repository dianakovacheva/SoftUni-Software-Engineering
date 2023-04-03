import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/auth.js";
import { createSubmitHandler } from "../util.js";


const registerTemplate = (submitHandler) => html`
<section id="register-page" class="register">
    <form @submit=${submitHandler} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`;


export function registerView(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(ctx, submitHandler)));

    async function submitHandler(ctx, formData, event) {

        if (formData.email === '' || formData.password === '') {
            return alert('All fields required!')
        };

        if (formData.password !== formData['confirm-pass']) {
            return alert('Passwords don\'t match!');
        };

        await register(formData.email, formData.password);
        event.target.reset();
        ctx.page.redirect('/catalog');
    };
};