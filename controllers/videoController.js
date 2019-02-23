import routes from "../routes";
import videoModel from "../models/video";

export const renderHome = async (req, res) => {
    try {
        const arrayVideos = await videoModel.find({});
        res.render("home", { pageTitle: "Home", arrayVideos }); // browsing "home.pug".
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", arrayVideos: [] });
    }
}

export const renderSearch = (req, res) => {
    // const searchingBy = req.query.q;    // ES5
    const { // ES6
        query: { q: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, arrayVideos });
};

export const renderVideos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const videoDetails = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        const video = await videoModel.findById(id);
        res.render("video_details", { pageTitle: "Video details", video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}
export const renderEditVideo = (req, res) => res.render("edit_video", { pageTitle: "Edit video" });

export const getUploadVideo = (req, res) => res.render("upload_video", { pageTitle: "Upload video" });

export const postUploadVideo = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;

    const newVideo = await videoModel.create({
        fileUrl: path,
        title,
        description
    });

    res.redirect(routes.videoDetails(newVideo.id));
};

export const renderDeleteVideo = (req, res) => res.render("delete_video", { pageTitle: "Delete video" });
