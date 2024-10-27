import { Router } from "express";

import { createTask, getTasks, getUsersTasks, updateTask } from "../controllers/taskController";

const taskRouter = Router();

taskRouter.get('/', getTasks);
taskRouter.post('/', createTask);
taskRouter.patch('/:taskId/status', updateTask);
taskRouter.get("/:userId", getUsersTasks)

export default taskRouter;
