import express from 'express';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import {
    renderSignup,
    renderAfterSignup,
    renderSignin,
    renderAfterSignin,
    renderSignout,
} from '../controllers/userController';

const globalRouter = express.Router();

export default globalRouter;

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.signup, renderSignup);
globalRouter.post(routes.signup, renderAfterSignup);

globalRouter.get(routes.signin, renderSignin);
globalRouter.post(routes.signin, renderAfterSignin);

globalRouter.get(routes.signout, renderSignout);


/*
// In source.js
const source  = () => console.log("hi");
export default source;

// In target.js
import source from "./source.js";

// Whatever else is inside source.js is not gonna be exported by default.


// If you don't wanna export one thing as a default and you want to export many things.
export const a = () => console.log("hi a");
export const b = () => console.log("hi b");
export const c = () => console.log("hi c");

// In target.js
import { a, b, c} from "./source";
*/
