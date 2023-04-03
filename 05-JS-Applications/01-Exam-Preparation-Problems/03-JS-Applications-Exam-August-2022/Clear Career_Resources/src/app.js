import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./views/layout.js";
import { getUserData } from "./util.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logout } from "./data/auth.js";
import { catalogView } from "./views/catalog.js";
import { detailsView } from "./views/details.js";
import { createView } from "./views/create.js";
import { editView } from "./views/edit.js";


const root = document.getElementById('wrapper');

// Global middleware
page(decorateContext);

// Page Views
page('index.html', '/');
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutAction);
page('/catalog', catalogView);
page('/catalog/:id', detailsView);
page('/create', createView);
page('/catalog/:id/edit', editView);




page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
};


// TODO Inject dependencies
function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
};


function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/catalog');
}