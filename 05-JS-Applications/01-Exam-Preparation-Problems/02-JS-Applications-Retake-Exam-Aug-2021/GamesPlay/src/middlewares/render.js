import { html, render } from "../../node_modules/lit-html/lit-html.js";

const headerElement = document.querySelector('.header-navigation');
const mainElement = document.getElementById('main-content');

const userTemplate = html`
<div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
</div>`;

const guestTemplate = html`<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`;

const navigationTemplate = (user) => html`
<h1><a class="home" href="/">GamesPlay</a></h1>
<nav>
    <a href="/catalog">All games</a>

    ${user 
    ? userTemplate
    : guestTemplate
    }
    
</nav>`;


function ctxRender(content) {
    render(content, mainElement);
};

export function addRender(ctx, next) {
    render(navigationTemplate(ctx.user), headerElement);
    ctx.render = ctxRender;
    
    next();
};