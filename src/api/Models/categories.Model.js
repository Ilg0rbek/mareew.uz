import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../../config"

export class Category extends Model {}

Category.init({
    name:{
        type: DataTypes.STRING(50),
		allowNull: false
	}
},	{
	sequelize,
	modelName: "Category"
})