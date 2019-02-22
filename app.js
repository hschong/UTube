 // const express = require('express'); // old style
import express from "express";
import morgan from "morgan"; // middleware for logging.
import helmet from "helmet" // Secure your Express apps by setting various HTTP headers.
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; 
import { localsMiddleware } from "./middleware";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

/*
// middleware can kill client request.
const middleware = (req, res, next) => {
    res.send("not happening!");
}
app.use(between); // middleware for "/" and "/profile"
*/

/*
const between = (req, res, next) => {
    console.log("I am between.");
    next();
}
app.get("/", between, handleHome);
*/

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;