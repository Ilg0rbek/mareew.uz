import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class Product extends Model {}

Product.init({
	name: {
    	type: DataTypes.STRING(50),
    	allowNull: false,
    },
	price: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    },
   	net_price: {
      	type: DataTypes.INTEGER,
      	defaultValue: 0,
    },
   	images: {
    	type: DataTypes.JSON,
    	allowNull: false,
    },
   	colors: {
    	type: DataTypes.JSON,
		allowNull: true
    },
   	details: {
    	type: DataTypes.JSON,
    	allowNull: false,
    },
   	description: {
      	type: DataTypes.TEXT,
		allowNull: true
    },
   	stock: {
      	type: DataTypes.INTEGER,
      	defaultValue: 1,
    },
   	shipping_price: {
      	type: DataTypes.INTEGER,
      	defaultValue: 0,
    },
   	status_new: {
      	type: DataTypes.BOOLEAN,
      	defaultValue: true,
    },
   	status_sale: {
      	type: DataTypes.BOOLEAN,
      	defaultValue: true,
    }
},	{
    sequelize,
    modelName: "product",
});