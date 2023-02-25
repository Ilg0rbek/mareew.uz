import query from "#query/carts.Query"
import db from "#config/db"
import Cart from "#models/carts.Model"

const GET = async ({ cart_user_id }) => {
	return await Cart.findOne({
		where:{
			cart_user_id	
		}
	})
}

const GET_ONE = async ({ cart_id }) => {
	return await Cart.findOne({
		where:{
			cart_user_id	
		}
	})
}

const POST = async ({ cart_user_id, cart_product_id, cart_quantity, cart_product_color }) => {
	return await Cart.create({
		cart_user_id,
		cart_product_id,
		cart_quantity,
		cart_product_color	
	})
}

const PUT = async ({cart_id, cart_user_id, cart_product_id, cart_quantity }) => {
	const [data] = await Cart.update(
		{cart_quantity},
		{ where: {
			cart_id,
			cart_user_id,
			cart_product_id
		}}
	)
	return data
}

const DELETE = async ({ cart_id }) => {
	const [data] = await Cart.destroy({
		where:{
			cart_id
		}
	})
	return data
}

const checkUserId = async ({ cart_user_id }) => {
	const [data] = await Cart.destroy({
		where:{
			cart_user_id
		}
	})
	return data
}

const checkProductId = async ({ cart_product_id }) => {
	const [data] = await Cart.destroy({
		where:{
			cart_product_id
		}
	})
	return data
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkUserId,
	checkProductId
}
