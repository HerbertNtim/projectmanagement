import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";

const projectRouter = Router();

projectRouter.get('/', getProjects);
projectRouter.post('/', createProject);

export default projectRouter;
