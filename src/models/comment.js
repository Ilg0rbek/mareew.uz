import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class Comment extends Model {}

Comment.init({
	status:{
        type: DataTypes.STRING(50),
		defaultValue:"pending"
	},
	content:{
        type: DataTypes.STRING(255),
		allowNull: false
	},
	stars:{
		type: DataTypes.INTEGER,
		defaultValue: 5
	},
},	{
	sequelize,
	modelName: "comment"
})