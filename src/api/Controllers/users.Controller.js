import validation from "#validations/users.Validation"
import User from "#repo/users.Model"

const GET = async (req, res) => { 
	try{
		let users = await User.GET( )

		if(!users?.length) throw new Error("No users found")

		users = users.filter(user => delete user.user_password)

		res.status(200).json({
			status: 200,
			message: "Users successfully fetched",
			data: users
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
		if(validation.GET_ONE({ ...req.params })?.status != true) throw new Error(validation.GET_ONE({ ...req.params }).message)

		const user = await User.GET_ONE({ ...req.params })

		if(!user) throw new Error("User not found")

		delete user.user_password

		res.status(200).json({
			status: 200,
			message: "User successfully fetched",
			data: user
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
		if(req.user.user_role != "admin") throw new Error("Your are not admin role")

		if(validation.POST({ ...req.body })?.status != true) throw new Error(validation.POST({ ...req.body }).message)

		if(await User.checkTelegramId({ ...req.body })) throw new Error("Telegram id already exists")
		if(await User.checkPhone({ ...req.body })) throw new Error("Phone already exists")
		
		const user = await User.POST({ ...req.body });

		delete user.user_password

		if(!user) throw new Error("User not found")

		res.status(200).json({
			status: 200,
			message: "User successfully created",
			data: user
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
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")

		if(validation.PUT({ ...req.body })?.status != true) throw new Error(validation.PUT({ ...req.body }).message)

		if(await User.checkTelegramId({ ...req.body })) throw new Error("Telegram id already exists")
		if((await User.checkPhone({ ...req.body }))?.length) throw new Error("Phone already exists")
		
		const user = await User.PUT({...req.body});

		if(!user) throw new Error("User not found")

		res.status(200).json({
			status: 200,
			message: "User successfully updated",
			data: user
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
		if(req.user.user_role != "admin") throw new Error("You are not authorized to perform this action")


		if(validation.DELETE({ ...req.body })?.status != true) throw new Error(validation.DELETE({ ...req.body }).message)

		const user = await User.DELETE( { ...req.body });

		if(!user?.length) throw new Error("User not found")

		res.status(200).json({
			status: 200,
			message: "User successfully deleted",
			data: user
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