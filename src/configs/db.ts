import { Sequelize, Dialect } from "sequelize";

const host: string = process.env.DB_HOST || "localhost";
const user: string = process.env.DB_USER || "root";
const password: string = process.env.DB_PASS || "";
const port: number = parseInt(process.env.DB_PORT || "3306");
const database: string = process.env.DB_NAME || "cbt-db";
const dbconnection: Dialect = (process.env.DB_CONNECTION as Dialect) || "mysql";

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  logging: process.env.NODE_ENV === "development",
  dialect: dbconnection /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

//@ts-ignore
global.sequelize = sequelize;
export default sequelize;
