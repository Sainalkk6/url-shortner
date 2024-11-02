import { Options, Sequelize } from "sequelize";
import "dotenv/config"

const options: Options = {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASENAME,
    port: process.env.POSTGRES_DATABASEPORT as unknown as number,
    dialect: "postgres",
    host: process.env.POSTGRES_DATABASE_HOST,
    sync: { alter: true, logging: true }
}

const sequelize = new Sequelize(options)



export default sequelize