import { Response, Request, NextFunction } from "express";
import { createClient, RedisClientType } from "redis";
import JWT from "jsonwebtoken";

export const CheckToken = (req: Request, res: Response, next: NextFunction) => {
  let BorrowerToken: string = req.headers["authorization"];
  if (BorrowerToken) {
    JWT.verify(BorrowerToken, process.env.SECRET, (error) => {
      if (error) {
        res.status(500).json({
          statuscode: 500,
          msg: "Invalid Token",
        });
      } else {
        next();
      }
    });
  } else {
    res.status(500).json({
      statuscode: 500,
      msg: "please provide authentication token value",
    });
  }
};
