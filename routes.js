// Global routes
const HOME = "/";
const SEARCH = "/search";
const SIGNUP = "/signup";
const SIGNIN = "/signin";
const SIGNOUT = "/signout";

// User routes
const USERS = "/users";
const USER_DETAILS = "/:id";
const EDIT_PROFILE = "/edit";
const CHANGE_PASSWORD = "/change-password";

// Video routes
const VIDEOS = "/videos";
const UPLOAD_VIDEO = "/upload-video";
const VIDEO_DETAILS = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    signup: SIGNUP,
    signin: SIGNIN, 
    signout: SIGNOUT,
    search: SEARCH,
    users: USERS,
    userDetails: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAILS;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    uploadVideo: UPLOAD_VIDEO,
    videoDetails: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAILS;
        }
    },
    editVideo: (id) => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: (id) => {
	    if (id) {
	      return `/videos/${id}/delete`;
	    } else {
	      return DELETE_VIDEO;
	    }
	  }
};

export default routes;