import { Router } from "express";

import { createTask, getTasks, updateTask } from "../controllers/taskController";

const taskRouter = Router();

taskRouter.get('/', getTasks);
taskRouter.post('/', createTask);
taskRouter.patch('/:taskId/status', updateTask);

export default taskRouter;
