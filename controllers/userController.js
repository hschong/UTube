import routes from "../routes";

export const renderSignup = (req, res) => {
    res.render("signup", {
        pageTitle: "Sign Up"
    });
};

export const renderAfterSignup = (req, res) => {
    const { // name list of elements in signup.pug 
        body: {name, email, password1, password2}
    } = req;

    if (password1 !== password2) {
        res.status(400);
        res.render("signup", {pageTitle: "Sign Up"});
    } else {    // To do for a resistered user
        res.redirect(routes.home);
    }
    
};

export const renderSignin = (req, res) => res.render("signin", {pageTitle: "Sign In"});

export const renderAfterSignin = (req, res) => {
    console.log(req.body);
    res.redirect(routes.home);
}

export const renderSignout = (req, res) => res.render("signout", {pageTitle: "Sign Out"});

export const renderUsers = (req, res) => res.render("users", {pageTitle: "Users"});

export const renderUserdetails = (req, res) => res.render("user_details", {pageTitle: "User details"});

export const renderEditProfile = (req, res) => res.render("edit_profile", {pageTitle: "Edit profile"});

export const renderChangePassword = (req, res) => res.render("change_password", {pageTitle: "Change password"});
