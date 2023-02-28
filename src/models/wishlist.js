import { DataTypes, Model } from 'sequelize'
import { sequelize } from "../config/index.js"

export class Wishlist extends Model {}

Wishlist.init({

},
{
	sequelize,
	modelName:"wishlist"
})