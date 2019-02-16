export const renderSignup = (req, res) => res.render("signup", {pageTitle: "Sign Up"})   // pug file name

export const renderSignin = (req, res) => res.render("signin", {pageTitle: "Sign In"});

export const renderSignout = (req, res) => res.render("signout", {pageTitle: "Sign Out"});

export const renderUsers = (req, res) => res.render("users", {pageTitle: "Users"});

export const renderUserdetails = (req, res) => res.render("user_details", {pageTitle: "User details"});

export const renderEditProfile = (req, res) => res.render("edit_profile", {pageTitle: "Edit profile"});

export const renderChangePassword = (req, res) => res.render("change_password", {pageTitle: "Change password"});
