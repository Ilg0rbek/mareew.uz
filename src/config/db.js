
import { Sequelize } from 'sequelize'
import { PG_DATABASE, PG_HOST, PG_USER, PG_PORT, PG_PASSWORD } from './config.js'

const options = {
  dialect: "postgres",
  host: PG_HOST,
  port: Number(PG_PORT),
  logging: false,
  define: {
    underscored: true,
    freezeTableName: true,
    timestamps: false
  },
};

export const sequelize = new Sequelize(
    PG_DATABASE,
    PG_USER,
    PG_PASSWORD,
    options
);

export { Transaction } from 'sequelize'