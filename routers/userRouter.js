import express from "express";
import routes from "../routes";
import { 
    users,
    user_details, 
    edit_profile, 
    change_password 
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.edit_profile, edit_profile);
userRouter.get(routes.user_details, user_details);
userRouter.get(routes.change_password, change_password);

export default userRouter;
