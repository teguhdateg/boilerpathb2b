import BorrowerModel from "~/models/borrower";
import bcryp from "bcrypt";
import JWT from "jsonwebtoken";

interface JwtPayload{
  id: string
}

export default class Borrower extends BorrowerModel {
  constructor({ req, res }) {
    super({ req, res });
  }

  async Register() {
    try {
      let name = this.req.body.name;
      let email = this.req.body.email;
      let religon = this.req.body.religion;
      let password = this.bcryp.hashSync(this.req.body.password, 10);
      const db = this.db.define(this.table, this.datatype);

      const data = await db.findOne({ where: { email } });
      console.log(this.db);
      if (data) {
        return {
          code: 500,
          data: "already email exist!",
        };
      } else {
        await db.create({
          name,
          email,
          religon,
          password,
        });
        return {
          code: 200,
          data: "Register succesfully!",
        };
      }
    } catch (error) {
      console.log("register:error ", error);
      return {
        code: 500,
        data: "sorry your update data borrower failed!",
      };
    }
  }

  async Login() {
    try {
      let email: string = this.req.body.email;
      const db = this.db.define(this.table, this.datatype);

      let data:any = await db.findOne({ where: { email } });
      data = data.toJSON();
      console.log(data)

      if (data) {
        if (bcryp.compareSync(this.req.body.password, data.password)) {
          let BorrowerToken: string = JWT.sign(
            {
              email: data.email,
              id: data.id,
            },
            process.env.SECRET,
            {
              expiresIn: 120,
              notBefore: 2,
            }
          );

            return{
              code: 200,
              data: "user login successfully!",
              token: BorrowerToken,
            }
        } else {
          return{
            code: 500,
            data: "password didn't match",
          };
        }
      } else {
        return{
          code: 500,
          data: "borrower not found!",
        } ;
      }
    } catch (error) {
      console.log("login:error ", error);
      return {
        code: 500,
        data: "sorry your update data borrower failed!",
      };
    }
  }

  async ChangePass(){
    try {
      let auth: string = this.req.headers["authorization"];
      let password = this.bcryp.hashSync(this.req.body.password, 10);
      const { id } = JWT.verify(auth,process.env.SECRET) as JwtPayload
      const db = this.db.define(this.table, this.datatype);
      
      await db.update({
          password: password
        },{
          where: {
          id: id,
        },
      });

      return {
          code: 200,
          data: "change password borrower succesfully!",
        };

      }catch (error) {
      console.log("changepass:error ", error);
      return {
        code: 500,
        data: "sorry changes password borrower failed!",
      };
    }
  }

  async ChangeProfile(){
    try {
      let auth: string = this.req.headers["authorization"];
      let name = this.req.body.name;
      let email = this.req.body.email;
      let religion = this.req.body.religion;
      const { id } = JWT.verify(auth,process.env.SECRET) as JwtPayload
      const db = this.db.define(this.table, this.datatype);
      
      await db.update({
          name: name,
          email: email,
          religion: religion
        },{
          where: {
          id: id,
        },
      });

      return {
          code: 200,
          data: "change profile borrower succesfully!",
        };

      }catch (error) {
      console.log("changeprofile:error ", error);
      return {
        code: 500,
        data: "sorry changes profile borrower failed!",
      };
    }
  }

  async Validate(){
    try {
      let auth: string = this.req.headers["authorization"];
      if(auth){
        JWT.verify(auth, process.env.SECRET,(error, decode) => {
          if(error){
            return{
              code:500,
              data:"Not Valid Token"
            }
          }else{
            return{
              code:200,
              data:decode 
            }
          }
        });
      }
    }catch (error) {
      console.log("validate:error ", error);
      return {
        code: 500,
        data: "Not Valid!",
      };
    }
  }

  async Profile(){
    try {
      let auth: string = this.req.headers["authorization"];
      const { id } = JWT.verify(auth,process.env.SECRET) as JwtPayload
      const db = this.db.define(this.table, this.datatype);
      if(auth){
        const data = await db.findOne({where:({id})})
        console.log(data)
        return{
          code:200,
          data: data
        }
      }else{
        return{
          code:500,
          data:"Your Profile Not Found!"
        }
      }
    }catch (error) {
      console.log("profile:error", error);
      return {
        code: 500,
        data: "pleace your validate account!",
      };
    }
  }

  async Logout(){
    try {
      let auth: string = this.req.headers["authorization"];
      const { id } = JWT.verify(auth,process.env.SECRET) as JwtPayload
      const db = this.db.define(this.table, this.datatype);
      if(auth){
        return{
          code:200,
          data:"logout!"
        }
      }else{
        return{
          code:500,
          data:"Your Profile Not Found!"
        }
      }
    }catch (error) {
      console.log("profile:error", error);
      return {
        code: 500,
        data: "forced!",
      };
    }
  }

  async Get(){
    try {
      let auth: string = this.req.headers["authorization"];
      const { id } = JWT.verify(auth,process.env.SECRET) as JwtPayload
      const db = this.db.define(this.table, this.datatype);
      if(auth){
       const data = db.findAll()
        return{
          code:200,
          data:data
        }
      }else{
        return{
          code:500,
          data:"Fialed Get Data!"
        }
      }
    }catch (error) {
      console.log("getdata:error", error);
      return {
        code: 404,
        data: "Your Not Access!",
      };
    }
  }

  async Delete(){
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

