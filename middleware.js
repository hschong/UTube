import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "UTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticatd: true,
        id: 1
    };
    next();
}