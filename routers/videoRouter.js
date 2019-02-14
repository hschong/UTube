import express from "express";
import routes from "../routes";
import { videos, upload_video, video_details, edit_video, delete_video } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.video_details, video_details);
videoRouter.get(routes.upload_video, upload_video);
videoRouter.get(routes.delete_video, delete_video);
videoRouter.get(routes.edit_video, edit_video);

export default videoRouter;