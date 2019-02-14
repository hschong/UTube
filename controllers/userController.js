export const signup = (req, res) => res.render("signup", {pageTitle: "Sign Up"})   // pug file name
export const signin = (req, res) => res.render("signin", {pageTitle: "Sign In"});
export const signout = (req, res) => res.render("signout", {pageTitle: "Sign Out"});
export const user_details = (req, res) => res.render("user_details", {pageTitle: "User details"});
export const edit_profile = (req, res) => res.render("edit_profile", {pageTitle: "Edit profile"});
export const change_password = (req, res) => res.render("change_password", {pageTitle: "Change password"});
