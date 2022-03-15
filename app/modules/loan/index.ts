import { Request, Response } from "express";
import JWT from "jsonwebtoken"
import LoanModel from "~/models/loan";

interface JwtPayload{
  id:number
}

export default class Loan extends LoanModel {
  constructor({ req, res }) {
    super({ req, res });
  }

  async GetAll() {
    try {
      const db = this.db.define(this.table, this.datatype);
      const data = await db.findAll()
      if(data){
        return{
          code:200,
          data:data
        }
      }
    } catch (error) {
      console.log("validate:error ", error);
      return {
        code: 500,
        data: "Not Valid Token!",
      };
    }
  }

  async GetById() {
    try {
      const db = this.db.define(this.table, this.datatype);
      const data = await db.findOne({
        where:{
            id:this.req.params.id
        }
      })
      if(data){
        return{
          code:200,
          data:data
        }
      }
    } catch (error) {
      console.log("validate:error ", error);
      return {
        code: 500,
        data: "Not Valid Token!",
      };
    }
  }

  async addloan(){
    try {
      let auth = this.req.headers["authorization"];
      const db = this.db.define(this.table, this.datatype);
      if(auth){
        const { id } = JWT.verify(auth, process.env.SECRET) as JwtPayload
        let Request = this.req.body;
        let ReCreate = Object.assign(Request,{borrower_id:id})
        db.create(ReCreate)
        return{
          code:200,
          data:'add data loan succesfully!'
        }
      }
    } catch (error) {
      console.log("validate:error ", error);
      return {
        code: 500,
        data: "Not Valid Token!",
      };
    }
  }

  async updateloan(){
    try {
      let auth = this.req.headers["authorization"];
      let rebody=this.req.body
      let loan_amount = rebody.loan_amount;
      let loan_length = rebody.loan_length;
      let status = rebody.status;
      const db = this.db.define(this.table,this.datatype);
      if(auth){
        const { id } = JWT.verify(auth,process.env.SECRET) as JwtPayload
        await db.update({
          loan_amount,
          loan_length,
          status
        },{
          where:{
            id:this.req.body.id
          }
        })
        return{
          code:200,
          data:"update data success!"
        }
      }else{
          return{
            code:500,
            data:"update data failed"
          }
      }
    } catch (error) {
      console.log("updateloan:error ", error);
      return {
        code: 500,
        data: "check your token",
      };
    }
  }

  async deleteloan(){
    try {
      let auth = this.req.headers["authorization"];
      const db = this.db.define(this.table,this.datatype);
      if(auth){
        db.destroy({
          where:{
            id:this.req.params.id
          }
        })
      }
      return{
        code:200,
        data:"deleted loan success!"
      }
    } catch (error) {
      console.log("updateloan:error ", error);
      return {
        code: 500,
        data: "Update Loan Failed!",
      };
    }
  }
}
