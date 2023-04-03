import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import { register } from "../api/auth.js";


const registerTemplate = (submitHandler) => html`
    <section id="register-page" class="content auth">
        <form @submit=${submitHandler} id="register">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>
    
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">
    
                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password">
    
                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password">
    
                <input class="btn submit" type="submit" value="Register">
    
                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>`;

export function registerView(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(ctx, submitHandler)));
};

async function submitHandler(ctx, formData, event) {
    if (formData.email === '' || formData.password === '') {
        return alert('All fields required!');
    };

    if (formData.password !== formData['confirm-password']) {
        return alert('Passwords don\'t match!');
    }

    await register(formData.email, formData.password);
    event.target.reset();
    ctx.page.redirect('/');
};