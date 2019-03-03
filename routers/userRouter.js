import express from 'express';
import routes from '../routes';
import {
    renderUsers,
    renderUserdetails,
    renderEditProfile,
    renderChangePassword,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.users, renderUsers);
userRouter.get(routes.editProfile, renderEditProfile);
userRouter.get(routes.userDetails(), renderUserdetails);
userRouter.get(routes.changePassword, renderChangePassword);

export default userRouter;
