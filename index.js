// const express = require('express');
import express from "express";
import morgan from "morgan";    // middleware for logging.
import helmet from "helmet"    // Secure your Express apps by setting various HTTP headers.
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; 

const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on http://localhost:${PORT}.`);
const handleHome = (req, res) => res.send("Hi from Home!");
const handleProfile = (req, res) => res.send("Hi from Profile!");

// middleware can kill client request.
// const middleware = (req, res, next) => {
//     res.send("not happening!");
// }

const between = (req, res, next) => {
    console.log("I am between.");
    next();
}

// app.get("/", between, handleHome);
// app.use(between);   // middleware for "/" and "/profile"
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);   // route
app.get("/profile", handleProfile); // route
app.listen(PORT, handleListening);

