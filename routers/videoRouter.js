import express from "express";
import routes from "../routes";
import {
    renderVideos,
    getUploadVideo,
    postUploadVideo,
    videoDetails,
    renderEditVideo,
    renderDeleteVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.videos, renderVideos);
videoRouter.get(routes.editVideo, renderEditVideo);
videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, uploadVideo, postUploadVideo);
videoRouter.get(routes.deleteVideo, renderDeleteVideo);
videoRouter.get(routes.videoDetails(), videoDetails);

export default videoRouter;