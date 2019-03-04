import express from 'express';
import routes from '../routes';
import {
    changePassword,
    editProfile,
    userDetails,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetails(), userDetails);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
