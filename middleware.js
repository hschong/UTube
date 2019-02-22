import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "UTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticatd: true,
        id: 1
    };
    next();
}

const multerVideo = multer({ destination: "uploads/videos/" });
export const uploadVideo = () => {
    multerVideo.single("videoFile"); // videoFile from upload_video.pug.
    console.log("Print multerVideo => ", multerVideo);
}
