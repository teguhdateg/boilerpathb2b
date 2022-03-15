import { Request, Response } from "express";
import Method from "./index";

export const GetAll = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).GetAll();
  res.status(output.code).json(output);
  res.end();
};

export const GetByid = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).GetById();
  res.status(output.code).json(output);
  res.end();
};

export const AddLoan = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).addloan();
  res.status(output.code).json(output);
  res.end();
};

export const updateloan = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).updateloan();
  res.status(output.code).json(output);
  res.end();
};

export const deleteloan = async (req: Request, res: Response) => {
  const output = await new Method({ req, res }).deleteloan();
  res.status(output.code).json(output);
  res.end();
};