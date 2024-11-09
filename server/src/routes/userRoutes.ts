import { Router } from "express";
import { getUser, getUsers, postUser } from "../controllers/usersController";

const userRouter = Router();

userRouter.get('/', getUsers)
userRouter.post("/", postUser) 
userRouter.get("/:cognitoId", getUser);


export default userRouter;
