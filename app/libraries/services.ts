import Database from "~/services/dbconfig";
import { DataType } from "sequelize-typescript";
import { Request, Response } from "express";
import bcryp from "bcrypt";

export default class ServicesBase {
  req: Request;
  res: Response;
  constructor({ req, res }: { req?: Request; res?: Response } = {}) {
    this.req = req;
    this.res = res;
  }
  db = Database;
  bcryp = bcryp;
  DataType = DataType;
}
