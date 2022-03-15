import ServicesBase from "~/libraries/services";
import { Request, Response } from "express";

export default class LoanModel extends ServicesBase {
  req: Request;
  res: Response;

  constructor({ req, res }: { req?: Request; res?: Response } = {}) {
    super({ req, res });
    this.req = req;
    this.res = res;
  }

  table = "Loans";

  datatype = {
    id: {
      type: this.DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    loan_amount: {
      type: this.DataType.INTEGER,
      allowNull: false,
    },
    loan_length: {
      type: this.DataType.INTEGER,
      unique: true,
    },
    status: {
      type: this.DataType.INTEGER,
    },
    borrower_id: {
      type: this.DataType.INTEGER,
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
