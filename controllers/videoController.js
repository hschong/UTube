export const home = (req, res) => res.render("home", {pageTitle: "Home"}); // go to home.pug
export const search = (req, res) => res.render("search", {pageTitle: "Search"});

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const upload_video = (req, res) => res.render("upload_video", {pageTitle: "Upload video"});
export const video_details = (req, res) => res.render("video_details", {pageTitle: "Video details"});
export const edit_video = (req, res) => res.render("edit_video", {pageTitle: "Edit video"});
export const delete_video = (req, res) => res.render("delete_video", {pageTitle: "Delete video"});
