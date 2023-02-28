import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../../config"

export class Brand extends Model {}

Brand.init({
	name: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	}
}, {
	sequelize,
    modelName: 'brand'
})