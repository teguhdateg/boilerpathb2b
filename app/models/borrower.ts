import ServicesBase from "~/libraries/services";
import { Request, Response } from "express";

export default class BorrowerModel extends ServicesBase {
  req: Request;
  res: Response;

  constructor({ req, res }: { req?: Request; res?: Response } = {}) {
    super({ req, res });
    this.req = req;
    this.res = res;
  }

  table = "Borrowers";

  datatype = {
    id: {
      type: this.DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: this.DataType.STRING,
      allowNull: false,
    },
    email: {
      type: this.DataType.STRING,
      unique: true,
    },
    religion: {
      type: this.DataType.INTEGER,
    },
    password: {
      type: this.DataType.STRING,
    },
    createdAt: {
      type: this.DataType.DATE,
      defaultValue: this.db.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: this.DataType.DATE,
      defaultValue: this.db.literal("CURRENT_TIMESTAMP"),
    },
  };

  data = this.db.define(this.table, this.datatype);
}
