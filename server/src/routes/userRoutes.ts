import { Router } from "express";
import { getUsers, postUser } from "../controllers/usersController";

const userRouter = Router();

userRouter.get('/', getUsers)
userRouter.post("/", postUser) 


export default userRouter;
