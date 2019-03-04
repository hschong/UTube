import routes from '../routes';

export const getSignUp = (req, res) => {
    res.render('signup', {
        pageTitle: 'Sign Up',
    });
};

export const postSignUp = (req, res) => {
    const { // name list of elements in signup.pug
        body: {
            name, email, password1, password2,
        },
    } = req;

    if (password1 !== password2) {
        res.status(400);
        res.render('signup', { pageTitle: 'Sign Up' });
    } else { // To do for a resistered user
        res.redirect(routes.home);
    }
};

export const getSignIn = (req, res) => res.render('signin', { pageTitle: 'Sign In' });

export const postSignIn = (req, res) => {
    console.log(req.body);
    res.redirect(routes.home);
};

export const signOut = (req, res) => {
    res.redirect(routes.home);
};

export const userDetails = (req, res) => res.render('user_details', { pageTitle: 'User details' });

export const editProfile = (req, res) => res.render('edit_profile', { pageTitle: 'Edit profile' });

export const changePassword = (req, res) => res.render('change_password', { pageTitle: 'Change password' });
