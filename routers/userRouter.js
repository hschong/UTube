import express from "express";
import routes from "../routes";
import { user_index, user_edit, user_password } from "../controllers/userController";

const userRouter = express.Router();

export default userRouter;

userRouter.get(routes.users, user_index);
userRouter.get(routes.edit_profile, user_edit);
userRouter.get(routes.change_password, user_password);