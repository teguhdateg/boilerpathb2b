import { Response, Request, NextFunction } from "express";
import { createClient, RedisClientType } from "redis";
import JWT from "jsonwebtoken";

class Middleware {
  client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL,
    });
    
    (async (t) => {
      console.log("Redis oke");
      this.client.on("error", (err) => console.log("Redis Client Error", err));
      await t.client.connect();
    })(this);
  }

  async checkToken(req: Request, res: Response, next: NextFunction) {
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
  }
}

export default new Middleware();
export const CheckToken = (req: Request, res: Response, next: NextFunction) =>
  new Middleware().checkToken(req, res, next);
