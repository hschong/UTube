import express from "express";
import routes from "../routes";
import { user_details, edit_profile, change_password } from "../controllers/userController";

const userRouter = express.Router();

export default userRouter;

userRouter.get(routes.users, user_details);
userRouter.get(routes.edit_profile, edit_profile);
userRouter.get(routes.change_password, change_password);