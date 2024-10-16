import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching projects", error: error.message });
  }
}

export const createProject = async (req: Request, res: Response): Promise<void> => {
  const { name, description, startDate, endDate } = req.body;

  if (!name || !description || !startDate || !endDate) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate)
      }
    });
    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(500).json({ message: "Error creating project", error: error.message });
  }
}
