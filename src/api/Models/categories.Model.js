import query from "#query/categories.Query"
import db from "#config/db"
import {Sequelize, Model, DataTypes} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});

class Category extends Model {}

Category.init(
	{
		category_id:{
			type: DataTypes.INTEGER,
			primaryKey: true
		},
        category_name:{
          type: DataTypes.STRING(50),
		  allowNull: false
		}, 
		cart_created_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false
		},
		cart_updated_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
			allowNull: false
		},
		cart_deleted_at:{
			type: DataTypes.TIME,
			allowNull: true
		}
	},
	{
		sequelize,
		modelName: "Category"
	})
export default Category