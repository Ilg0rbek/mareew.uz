import query from "#query/comments.Query"
import db from "#config/db"
import Comment from "#models/comments.Model"

const GET = async () => {
	return await Comment.findAll()
}

const GET_ONE = async ({ comment_id }) => {
	return await Comment.findOne({
		where:{
           comment_id
		}
	})
}

const POST = async ({ comment_user_id, comment_product_id, comment_content, comment_stars}) => {
	return await Comment.create({
			comment_user_id, 
			comment_product_id, 
			comment_content, 
			comment_stars
		 })
}

const PUT = async ({comment_user_id, comment_product_id, comment_status, comment_content, comment_stars,comment_id }) => {
	const [data] = await Comment.update({
		comment_product_id, comment_status, comment_content, comment_stars
	},{
		where:{
			comment_user_id,
		    comment_id
		}
	})
	return data
}

const DELETE = async ({ comment_id }) => {
	return await Comment.destroy({
		where:{
			comment_id
		}
	})
}
const checkProduct = async ({ comment_product_id }) => {
	return await Comment.findOne({
		where:{
			comment_product_id
		}
	})
}

const checkUser = async ({ comment_user_id }) => {
	return await Comment.findOne({
		where:{
		   comment_user_id
		}
	})
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkProduct,
	checkUser,
}