import query from "#query/carts.Query"
import db from "#config/db"
import {Sequelize, Model, DataTypes} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});

class Cart extends Model {}

Cart.init(
	{
		brand_id:{
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		cart_user_id :{
            type: DataTypes.INTEGER,
			references:{
				model: "User",
				key:"user_id"
			}
		},
		cart_product_id :{
            type: DataTypes.INTEGER,
			references:{
				model: "User",
				key:"user_id"
			}
		},
		cart_quantity:{
			type: DataTypes.INTEGER,
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
		modelName: "Cart"
	})
export default Cart
