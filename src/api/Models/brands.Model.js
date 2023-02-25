import query from "#query/brands.Query"
import db from "#config/db"
import {Sequelize, Model, DataTypes} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});

class Brand extends Model {}

Brand.init({
	brand_id:{
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	brand_name: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	brand_created_at:{
        type: DataTypes.TIME,
		defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
		allowNull: false
	},
	brand_updated_at:{
		type: DataTypes.TIME,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
	},
	brand_deleted_at:{
        type: DataTypes.TIME,
		allowNull: true
	}
    }, {
	sequelize,
    modelName: 'Brand'
	})
	export default Brand;