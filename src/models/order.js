import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class Order extends Model {}

Order.init({
	content:{
		type: DataTypes.JSON,
		allowNull: false
	},
	method: {
		type: DataTypes.STRING(50),
		defaultValue: 'cash'
	},
	status:{
		type: DataTypes.STRING(50),
		defaultValue: "pending"
	},
	address:{
		type: DataTypes.STRING(50),
		allowNull: false
	},
	phone:{
		type: DataTypes.STRING(50),
		allowNull: false
	},
},	{
	sequelize,
	modelName: "order",
	timestamps: true,
	paranoid: true
})