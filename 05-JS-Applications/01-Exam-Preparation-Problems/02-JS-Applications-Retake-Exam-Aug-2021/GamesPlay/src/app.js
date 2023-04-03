import page from "../node_modules/page/page.mjs";

import { addSession } from "./middlewares/session.js";
import { addRender } from "./middlewares/render.js";

import { logout } from "./api/auth.js";

import { homeView } from "./views/home.js";
import { catalogView } from "./views/catalog.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";

page(addSession);
page(addRender);

page('/', homeView);
page('/catalog', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/logout', onLogout);

page.start();

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/');
};