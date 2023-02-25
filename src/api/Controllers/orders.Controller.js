import validation from "#validations/orders.Validation"
import Order from "#repo/orders.Model"

const GET = async (req, res) => { 
	try{
		// if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		let orders = await Order.GET()

		if(!orders) throw new Error("No orders found")

		orders = orders.map(order => {
			order.order_total_price = order.order_content.order_quantity * order.product_price
			return order
		})

		res.status(200).json({
			status: 200,
			message: "Orders successfully fetched",
			data: orders
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const GET_ONE = async (req, res) => { 
	try{ 
		// if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.GET_ONE({ ...req.params })?.status != true) throw new Error(validation.GET_ONE({ ...req.params }).message)

		let order = await Order.GET_ONE({...req.params})

		if(!order) throw new Error("Order not found!")

		order.order_total_price = order.order_content.order_quantity * order.product_price

		res.status(200).json({
			status: 200,
			message: "Order successfully fetched",
			data: order
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const POST = async (req, res) => { 
	try{
		// if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")
		// console.log(req.body)

		if(validation.POST({ ...req.body})?.status != true) throw new Error(validation.POST({ ...req.body }).message)

		if(!(await Order.checkProducts({ ...req.body }))) throw new Error("Products not found")

		if(!(await Order.checkUser({ order_user_id: req?.body?.order_user_id ? req?.body?.order_user_id  : req.user.user_id }))) throw new Error("User not found")

		const order = await Order.POST({ ...req.body, order_user_id: req?.body?.order_user_id ? req?.body?.order_user_id : req.user.user_id })

		if(!order) throw new Error("Order not found!")

		res.status(200).json({
			status: 200,
			message: "Orders successfully created",
			data: order
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const PUT = async (req, res) => { 
	try{
		// if(req?.user?.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.PUT({ ...req.body })?.status != true) throw new Error(validation.PUT({ ...req.body }).message)

		const order = await Order.PUT({...req.body})

		if(!order) throw new Error("Order not found!")

		res.status(200).json({
			status: 200,
			message: "Order successfully updated",
			data: order
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

const DELETE = async (req, res) => {
	try{
		// if(req?.user?.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const order = await Order.DELETE({...req.body})

		if(!order) throw new Error("Order not found!")

		res.status(200).json({
			status: 200,
			message: "Order successfully deleted!",
			data: order
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE
}