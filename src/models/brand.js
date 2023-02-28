import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class Brand extends Model {}

Brand.init({
	name: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true
	},
	images: {
		type: DataTypes.JSON,
		allowNull: false
	},
	is_hide: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
}, {
	sequelize,
    modelName: 'brand'
})