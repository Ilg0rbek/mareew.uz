import {Sequelize} from "sequelize";
import { config } from "dotenv";
config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST, dialect: 'postgres',
});

try {
    await sequelize.authenticate()
    console.log("Success")
} catch (e) {
    console.error(e)
}