import query from "#query/wishlists.Query"
import db from "#config/db"
import {Sequelize, Model, DataTypes} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});

class Wishlist extends Model {}

Wishlist.init(
	{
		wishlist_id:{
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		wishlist_user_id:{
			type: DataTypes.INTEGER,
			references:{
				model:"User",
				key:"user_id"
			}
		},
		wishlist_product_id:{
			type: DataTypes.INTEGER,
			references:{
				model:"Product",
				key:"product_id"
			}
		},
		wishlist_created_at: {
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false,
		  },
		wishlist_updated_at: {
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
			allowNull: false,
		  },
		wishlist_deleted_at: {
			type: DataTypes.TIME,
			allowNull: true,
		  },
	},
	{
		sequelize,
		modelName:"Wishlist"
	}
	)
export default Wishlist;