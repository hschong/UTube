import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

export default globalRouter

globalRouter.get(routes.home, (req, res) => res.send("Home!"));
globalRouter.get(routes.signup, (req, res) => res.send("Sing up!"));
globalRouter.get(routes.signin, (req, res) => res.send("Sign in!"));
globalRouter.get(routes.signout, (req, res) => res.send("Sign out!"));
globalRouter.get(routes.search, (req, res) => res.send("Search!"));

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
