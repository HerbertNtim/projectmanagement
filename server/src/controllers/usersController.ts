import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { cognitoId } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        cognitoId: cognitoId,
      },
    });

    res.status(200).json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving user: ${error.message}` });
  }
};

export const postUser = async(req: Request, res: Response ) => {
  
  try {
    const { username, cognitoId, profilePictureUrl = "i1.jpg", teamId = 1 } = req.body;
    const newUser = await prisma.user.create({
      data: {
        username,
        cognitoId,
        profilePictureUrl,
        teamId
      }
    });

    res.status(201).json({message: "User created", newUser});
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
}
