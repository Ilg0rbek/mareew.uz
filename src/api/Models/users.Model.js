import query from "#query/users.Query"
import db from "#config/db"
import { Sequelize , Model, DataTypes } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});

class User extends Model {}

User.init(
	{
		user_id:{
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		user_telegram_id:{
			type: DataTypes.STRING(50)
		},
		user_first_name:{
			type: DataTypes.STRING(50),
			allowNull: false
		},
		user_last_name:{
			type: DataTypes.STRING(50)
		},
		user_phone:{
			type: DataTypes.STRING(50),
			allowNull: false
		},
		user_password:{
			type: DataTypes.CHAR(255),
			 allowNull: false
		},
		user_role:{
			type: DataTypes.STRING(50),
			defaultValue:"user"
		},
		user_created_at: {
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false,
		  },
		user_updated_at: {
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
			allowNull: false,
		  },
		user_deleted_at: {
			type: DataTypes.TIME,
			allowNull: true,
		  },
	},
	{
		sequelize,
		modelName:"User"
	}
)
export default User;