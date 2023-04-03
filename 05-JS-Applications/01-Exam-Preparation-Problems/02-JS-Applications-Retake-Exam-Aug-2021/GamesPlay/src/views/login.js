import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/auth.js";
import { createSubmitHandler } from "../util.js";


const loginTemplate = (submitHandler) => html`
    <section id="login-page" class="auth">
        <form @submit=${submitHandler} id="login">
    
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
    
                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password">
                <input type="submit" class="btn submit" value="Login">
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
        </form>
    </section>`;

export function loginView(ctx) {
    // const submitHandler = createSubmitHandler(ctx, login)

    // createSubmitHandler(param1, callback)
    ctx.render(loginTemplate(createSubmitHandler(ctx, submitHandler)));
};

async function submitHandler(ctx, formData, event) {
    if (formData.email === '' || formData.password === '') {
        alert('All fields required!')
    };

    await login(formData.email, formData.password);
    event.target.reset();
    ctx.page.redirect('/');
};