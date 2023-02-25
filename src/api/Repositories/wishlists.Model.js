import query from "#query/wishlists.Query"
import db from "#config/db"
import Wishlist from "#models/wishlists.Model"

const GET = async ({wishlist_user_id}) => {
	return await Wishlist.findAll({
		where:{
			wishlist_user_id
		}
	})
}

const GET_ONE = async ({ wishlist_id }) => {
	const [data] = await Wishlist.findOne({
		where:{
           wishlist_id
		}
	})
}

const POST = async ({ wishlist_user_id, wishlist_product_id}) => {
	const [data] = await Wishlist.create({
		wishlist_user_id, wishlist_product_id
	})
	return data
}

const DELETE = async ({ wishlist_id }) => {
	const [data] = await Wishlist.destroy({
		where:{
			wishlist_id
		}
	})
	return data
}
const checkProduct = async ({ wishlist_product_id }) => {
	const [data] = await Wishlist.findOne({
		where:{
			wishlist_product_id
		}
	})
	return data
}

const checkUser = async ({ wishlist_user_id }) => {
	const [data] = await Wishlist.findOne({
		where:{
			wishlist_user_id
		}
	})
	return data
}

export default {
	GET,
	GET_ONE,
	POST,
	DELETE,
	checkProduct,
	checkUser
}