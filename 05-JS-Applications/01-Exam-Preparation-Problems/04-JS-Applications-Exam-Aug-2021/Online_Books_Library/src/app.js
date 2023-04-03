import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./views/layout.js";
import { getUserData } from "./util.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logout } from "./data/auth.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { myBooksView } from "./views/my-books.js";

const root = document.getElementById('container');

// Global middleware
page(decorateContext);

// Page Views
page('/index.html', catalogView);
page('/', catalogView);
page('/catalog', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutAction);
page('/create', createView);
page('/details/:id', detailsView);
page('/catalog/:id/edit', editView);
page('/my-books', myBooksView);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;
    next();
};

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
};

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/catalog');
};