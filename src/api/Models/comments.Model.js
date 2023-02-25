import query from "#query/comments.Query"
import db from "#config/db"
import {Sequelize, Model, DataTypes} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, dialect: 'postgres',
});
class Comment extends Model {}

Comment.init(
	{
		comment_id:{
			type: DataTypes.INTEGER,
			primaryKey: true
		},
        comment_user_id:{
          type: DataTypes.INTEGER,
		  references:{
			model: "User",
			key:"user_id",
		  }
		}, 
		comment_product_id:{
			type: DataTypes.INTEGER,
			references:{
			  model: "Product",
			  key:"product_id",
			}
		  }, 
		comment_status:{
            type: DataTypes.STRING(50),
			defaultValue:"pending"
		},
		comment_content:{
            type: DataTypes.STRING(255),
			allowNull: false
		},
		comment_stars:{
			type: DataTypes.INTEGER,
			defaultValue: 5
		},
		comment_created_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
			allowNull: false
		},
		comment_updated_at:{
			type: DataTypes.TIME,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
			allowNull: false
		},
		comment_deleted_at:{
			type: DataTypes.TIME,
			allowNull: true
		}
	},
	{
		sequelize,
		modelName: "Comment"
	})
export default Comment;