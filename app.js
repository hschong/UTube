 // const express = require('express'); // old style
import express from "express";
import morgan from "morgan"; // middleware for logging.
import helmet from "helmet" // Secure your Express apps by setting various HTTP headers.
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; 
import userRouter from "/routers/userRouter";
import videoRouter from "/routers/videoRouter";
import globalRouter from "routers/globalRouter";

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
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;