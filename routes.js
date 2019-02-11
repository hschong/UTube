// Global routes
const HOME = "/";
const SEARCH = "/search";
const SIGNUP = "/signup";
const SIGNIN = "/signin";
const SIGNOUT = "/signout";

// User routes
const USERS = "/users";
const USER_DETAILS = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Video routes
const VIDEOS = "/videos";
const UPLOAD_VIDEO = "/upload";
const VIDEO_DETAILS = ":/id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    signup: SIGNUP,
    signin: SIGNIN,
    signout: SIGNOUT,
    search: SEARCH,
    users: USERS,
    user_details: USER_DETAILS,
    edit_profile: EDIT_PROFILE,
    change_password: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload_video: UPLOAD_VIDEO,
    video_details: VIDEO_DETAILS,
    edit_video: EDIT_VIDEO,
    delete_video: DELETE_VIDEO 
};

export default routes;