import routes from "../routes";
import videoModel from "../models/video";

export const home = async (req, res) => {
    try {
        const videos = await videoModel.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", videos }); // browsing "home.pug".
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

export const search = (req, res) => {
    // const searchingBy = req.query.q;    // ES5
    const { // ES6
        query: { q: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
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
};

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        const video = await videoModel.findById(id);
        res.render("edit_video", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;

    try {
        await videoModel.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetails(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    };
};

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

export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        await videoModel.findOneAndDelete({ _id: id });
        res.redirect(routes.home);
    } catch (error) {
        console.log("deleteVideo async func: error = ", error);
        res.redirect(routes.home);
    }
};