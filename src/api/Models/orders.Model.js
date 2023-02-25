import query from "#query/orders.Query"
import db from "#config/db"
import {Sequelize, Model, DataTypes} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});
class Order extends Model {}

Order.init(
	{
		order_id:{
			type: DataTypes.INTEGER,
			primaryKey: true
		},
        order_user_id:{
          type: DataTypes.INTEGER,
		  references:{
			model: "User",
			key:"user_id",
		  }
		}, 
		order_content:{
			type: DataTypes.JSON,
			allowNull: false
		},
		order_satus:{
			type: DataTypes.STRING(50),
			defaultValue: "pending"
		},
		order_address:{
			type: DataTypes.STRING(50),
			allowNull: false
		},
		order_phone_number:{
			type: DataTypes.STRING(50),
			allowNull: false
		},
		order_created_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false
		},
		order_updated_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
			allowNull: false
		},
		order_deleted_at:{
			type: DataTypes.TIME,
			allowNull: true
		}
	},
	{
		sequelize,
		modelName: "Order"
	}
)
export default Order