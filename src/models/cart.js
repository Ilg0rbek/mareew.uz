import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class Cart extends Model {}

Cart.init({
	quantity:{
		type: DataTypes.INTEGER,
		allowNull: false
	},
},	{
	sequelize,
	modelName: "cart"
})