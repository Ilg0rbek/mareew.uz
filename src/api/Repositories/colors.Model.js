import query from "#query/colors.Query"
import db from "#config/db"
import Color from "#models/colors.Model"

const GET = async () => {
    return await Color.findAll()
}


const GET_ONE = async ({ color_id }) => {
	return await Color.findAll({
		where:{
		   color_id	
		}
	})
}

const POST = async ({ color_name }) => {
	const [rows] = await Color.create({color_name})
	return rows
}

const PUT = async ({ color_id, color_name}) => {
	const [rows] = await Color.update({color_name},{
		where:{
			color_id
		}
	})
	return rows
}

const DELETE = async ({ color_id }) => {
	const [rows] = await Color.destroy({
		where:{
			color_id
		}
	})
	return rows
}

const checkColor =  async ({ color_name }) => {
	const [rows] = await Color.findOne({
		where:{
			color_name
		}
	})
	return rows
}

export default {
	GET,
	GET_ONE,
	POST,
	PUT,
	DELETE,
	checkColor
}