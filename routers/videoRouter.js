import express from 'express';
import routes from '../routes';
import {
    getUploadVideo,
    postUploadVideo,
    videoDetails,
    deleteVideo,
    getEditVideo,
    postEditVideo,
} from '../controllers/videoController';
import { uploadVideo } from '../middleware';

const videoRouter = express.Router();


videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, uploadVideo, postUploadVideo);

videoRouter.get(routes.videoDetails(), videoDetails);
// uploadVideo 보다 먼저 등록하면 업로드 선택 시 아래 처럼 죽는다.
// TypeError: /Users/heeseok.chong/Data/GitHub/UTube/views/video_details.pug:5
//     3| block content
//     4|     .video__player
//   > 5|         video(src=`/${video.fileUrl}`, controls=true)
//     6|     .video__info
//     7|         a(href=routes.editVideo(video.id)) Edit video
//     8|         h5.video__title=video.title

// Cannot read property 'fileUrl' of null

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
