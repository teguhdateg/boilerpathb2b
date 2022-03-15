import { Sequelize } from "sequelize";

const sequelizeConnect = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // host: 'localhost',
    dialect: "postgres",
    host: process.env.DB_HOST,
    // dialect:process.env.DB_DIALECT as Dialect
  }
);

sequelizeConnect.authenticate().then(function (success) {
  console.log("success conect db postgre squalize");
});

export default sequelizeConnect;
