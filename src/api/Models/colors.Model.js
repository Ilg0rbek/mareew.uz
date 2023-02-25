import query from "#query/colors.Query"
import db from "#config/db"
import {Sequelize, Model, DataTypes} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});
class Color extends Model {}

Color.init(
	{
		color_id:{
			type: DataTypes.INTEGER,
			primaryKey: true
		},
        color_name:{
          type: DataTypes.STRING(50),
		  allowNull: false
		}, 
		color_created_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false
		},
		color_updated_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
			allowNull: false
		},
		color_deleted_at:{
			type: DataTypes.TIME,
			allowNull: true
		}
	},
	{
		sequelize,
		modelName: "Color"
	})
export default Color