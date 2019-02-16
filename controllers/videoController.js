import { arrayVideos } from "../db"

export const renderHome = (req, res) => res.render("home", {pageTitle: "Home", arrayVideos}); // browsing "home.pug".

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

export const renderDeleteVideo = (req, res) => res.render("delete_video", {pageTitle: "Delete video"});
