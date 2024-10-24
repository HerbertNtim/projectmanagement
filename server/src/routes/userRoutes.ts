import { Router } from "express";
import { getUsers } from "../controllers/usersController";

const userRouter = Router();

userRouter.get('/', getUsers)

export default userRouter;
