import { Request, Response } from "express";
import Method from "./index";

export const Register = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).Register();
  res.status(output.code).json(output);
  res.end();
};

export const Login = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).Login();
  res.status(output.code).json(output);
  res.end();
};

export const ChangePass = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).ChangePass();
  res.status(output.code).json(output);
  res.end();
};

export const ChangeProfile = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).ChangeProfile();
  res.status(output.code).json(output);
  res.end();
};

export const Validate = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).Validate();
  res.status(output.code).json(output);
  res.end();
};

export const Profile = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).Profile();
  res.status(output.code).json(output);
  res.end();
};

export const Get = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).Get();
  res.status(output.code).json(output);
  res.end();
};

export const Delete = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).Delete();
  res.status(output.code).json(output);
  res.end();
};