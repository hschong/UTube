 // const express = require('express'); // old style
import express from "express";
import morgan from "morgan"; // middleware for logging.
import helmet from "helmet" // Secure your Express apps by setting various HTTP headers.
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; 
import userRouter from "/routers/userRouter";
import videoRouter from "/routers/videoRouter";
import globalRouter from "/routers/globalRouter";
import routes from "./routes";

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

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;