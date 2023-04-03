import { logout } from "../services/userService.js";

export const logoutView = (ctx) => {
    logout()
        .then(() => {
            ctx.page.redirect('/');
        });
};