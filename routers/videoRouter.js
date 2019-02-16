import express from "express";
import routes from "../routes";
import { 
    renderVideos, 
    renderUploadVideo, 
    renderAfterUploadVideo,
    renderVideoDetails, 
    renderEditVideo, 
    renderDeleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, renderVideos);
videoRouter.get(routes.editVideo, renderEditVideo);
videoRouter.get(routes.uploadVideo, renderUploadVideo);
videoRouter.post(routes.uploadVideo, renderAfterUploadVideo);
videoRouter.get(routes.deleteVideo, renderDeleteVideo);
videoRouter.get(routes.videoDetails(), renderVideoDetails);



export default videoRouter;