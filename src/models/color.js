import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class Color extends Model {}

Color.init({
    name:{
        type: DataTypes.STRING(50),
		allowNull: false
	}, 
},	{
	sequelize,
	modelName: "color"
})