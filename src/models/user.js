import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class User extends Model {}

User.init({
	telegram_id:{
		type: DataTypes.STRING(50)
	},
	first_name:{
		type: DataTypes.STRING(50),
		allowNull: false
	},
	last_name:{
		type: DataTypes.STRING(50),
		allowNull: true
	},
	phone:{
		type: DataTypes.STRING(50),
		allowNull: false
	},
	password:{
		type: DataTypes.CHAR(255),
		allowNull: false
	},
	role:{
		type: DataTypes.STRING(50),
		defaultValue:"customer"
	},
},	{
	sequelize,
	modelName:"user"
})