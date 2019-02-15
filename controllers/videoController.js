export const home = (req, res) => res.render("home", {pageTitle: "Home"}); // go to home.pug

export const search = (req, res) => { 
    // const searchingBy = req.query.q;    // ES5
    const { // ES6
        query: {q: searchingBy}
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy});
};

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const video_details = (req, res) => res.render("video_details", {pageTitle: "Video details"});
export const edit_video = (req, res) => res.render("edit_video", {pageTitle: "Edit video"});
export const upload_video = (req, res) => res.render("upload_video", {pageTitle: "Upload video"});
export const delete_video = (req, res) => res.render("delete_video", {pageTitle: "Delete video"});
