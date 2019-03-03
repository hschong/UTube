import express from 'express';
import routes from '../routes';
import {
    renderUserdetails,
    renderEditProfile,
    renderChangePassword,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.editProfile, renderEditProfile);
userRouter.get(routes.userDetails(), renderUserdetails);
userRouter.get(routes.changePassword, renderChangePassword);

export default userRouter;
