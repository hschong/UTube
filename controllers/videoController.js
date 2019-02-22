import routes from "../routes";
import videoModel from "../models/video";

export const renderHome = async(req, res) => {
    try {
        const arrayVideos = await videoModel.find({});
        res.render("home", {pageTitle: "Home", arrayVideos}); // browsing "home.pug".
    } catch (error) {
        console.log(error);
        res.render("home", {pageTitle: "Home", arrayVideos: []});
    }
}

export const renderSearch = (req, res) => { 
    // const searchingBy = req.query.q;    // ES5
    const { // ES6
        query: {q: searchingBy}
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, arrayVideos});
};

export const renderVideos = (req, res) => res.render("videos", {pageTitle: "Videos"});

export const renderVideoDetails = (req, res) => res.render("video_details", {pageTitle: "Video details"});

export const renderEditVideo = (req, res) => res.render("edit_video", {pageTitle: "Edit video"});

export const renderUploadVideo = (req, res) => res.render("upload_video", {pageTitle: "Upload video"});

export const renderAfterUploadVideo = async(req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    console.log(title, description, path);
    console.log("req.body", req.body);
    console.log("req.file", req.file);

    const newVideo = await videoModel.create({
        videoUrl: path,
        title,
        description
    });
 
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const renderDeleteVideo = (req, res) => res.render("delete_video", {pageTitle: "Delete video"});
