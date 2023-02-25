import query from "#query/orders.Query"
import db from "#config/db"
import Order from "#models/orders.Model"

const GET = async () => {
	return await Order.findAll()
}

const GET_ONE = async ({ order_id }) => {
	const [data] = await Order.findOne({
		where:{
			order_id
		}
	})
}

const POST = async ({ order_user_id, order_content, order_address, order_phone_number }) => {
	const [data] = await Order.create({
		order_user_id, 
		order_content: JSON.stringify(order_content), 
		order_address, 
		order_phone_number
	})
	return data
}

const PUT = async ({order_id, order_user_id, order_content, order_status, order_address, order_phone_number }) => {
	const [data] = await Order.update({
		order_user_id, 
		order_content, 
		order_status,
		order_address,
		order_phone_number
	},{
		where:{
			order_id
		}
	})
	return data
}

const DELETE = async ({ order_id }) => {
	const [data] = await Order.destroy({
		where:{
			order_id
		}
	})
	return data
}

const checkProducts = async ({ order_content }) => {
	let productExists = true;

	order_content.forEach(async product => {
		const [ data ] = await Order.findOne({
			where:{
				order_product_id: product.order_product_id
			}
		})
		if(!data) return false
	})

	return productExists
}

const checkProduct = async ({ order_product_id }) => {
	const [data] = await Order.findOne({
		where:{
			order_product_id	
		}
	})
	return data
}

const checkUser = async ({ order_user_id }) => {
	const [data] = await Order.findOne({
		where:{
			order_user_id	
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
	checkProduct,
	checkProducts,
	checkUser
}