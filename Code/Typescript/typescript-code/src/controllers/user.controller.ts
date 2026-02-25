import { Request, Response } from "express";
import * as userService from "../services/user.service";


export const create = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

export const getAll = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

export const getById = async (
  req: Request<any>,
  res: Response
) => {
  const user = await userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json(user);
};

export const update = async (
  req: Request<any>,
  res: Response
) => {
  const user = await userService.updateUser(req.params.id, req.body);

  return res.status(200).json(user);
};


export const remove = async (
  req: Request<any>,
  res: Response
) => {
  await userService.deleteUser(req.params.id);

  return res.status(200).json({
    message: "User deleted successfully",
  });
};