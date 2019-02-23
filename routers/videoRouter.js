import express from "express";
import routes from "../routes";
import {
    renderVideos,
    getUploadVideo,
    postUploadVideo,
    videoDetails,
    renderDeleteVideo,
    getEditVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.videos, renderVideos);
videoRouter.get(routes.videoDetails(), videoDetails);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, uploadVideo, postUploadVideo);

videoRouter.get(routes.deleteVideo, renderDeleteVideo);

export default videoRouter;