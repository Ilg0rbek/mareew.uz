import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class OrderItem extends Model {}

OrderItem.init({
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
},	{
	sequelize,
	modelName: "order_item"
})