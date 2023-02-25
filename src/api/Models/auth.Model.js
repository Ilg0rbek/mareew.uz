import query from "#query/auth.Query";
import db from "#config/db";
import { Sequelize, DataTypes, Model } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});

export class Auth extends Model {}

Auth.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    user_phone: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    user_telegram_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize, 
    modelName: "Auth",
  }
);
export default Auth
