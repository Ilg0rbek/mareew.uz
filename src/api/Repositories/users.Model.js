import query from "#query/users.Query"
import db from "#config/db"
import User from "#models/users.Model"

const GET = async () => {
	return await User.findAll()
}

const GET_ONE = async ({user_id}) => {
	const [data] = await User.findOne({
		where:{
			user_id	
		}
	})
	return data
}

const POST = async ({ user_telegram_id, user_first_name, user_last_name, user_phone, user_password, user_role }) => {
	const [data] = await User.create({
		user_telegram_id,
		user_first_name,
		user_last_name,
		user_phone, 
		user_password, 
		user_role 
	})
	return data
}

const PUT = async ({ user_id, user_telegram_id, user_first_name, user_last_name, user_phone, user_password, user_role}) => {
    const [data] = User.update({
		user_telegram_id,
		user_first_name, 
		user_last_name, 
		user_phone,
		user_password,
		user_role
	},
	{
		where:{
		   user_id	
		}
	})
	return data
}

const DELETE = async ({ user_id }) => {
	const [data] = await User.destroy({
		where: {
			user_id
		}
	})
	return data
}

const checkPhone = async ({ user_phone }) => {
	const [data] = await User.findOne({
		where: {
			user_phone
		}
	})
	return data
}

const checkTelegramId = async ({ user_telegram_id }) => {
	const [data] = await User.findOne({
		where: {
			user_telegram_id
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
	checkPhone,
	checkTelegramId
}