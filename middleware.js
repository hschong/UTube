import routes from "./routes";
import multer from "multer";

const multerVideo = multer({destination: "videos/"});
// const multerVideo = multer({destination: routes.videos+"/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "UTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticatd: true,
        id: 1
    };
    next();
}

export const uploadVideo = multerVideo.single("videoFile"); // videoFile from upload_video.pug.