import query from "#query/Brands.Query"
import db from "#config/db"
import Brand from "#models/brands.Model";


const GET = async () => {
	const data = await Brand.findAll()
	return data
}

const GET_ONE = async ({brand_id}) => {
	const data = await Brand.findOne({
		where: {
			brand_id
		}
	})
	return data
}


const POST = async ({ brand_name }) => {
	const [rows] = await Brand.create({
		brand_name
	})
	return rows
}

const PUT = async ({ brand_id, brand_name}) => {
	const [rows] = await Brand.update({brand_name}, {
		where:{
			brand_id
		}
	})
	return rows
}

const DELETE = async ({ brand_id }) => {
	const [rows] = await Brand.destory({
		where:{
			brand_id
		}
	})
	return rows
}

const checkBrand = async ({ brand_name }) => {
	const [rows] = await Brand.findOne({
		where:{
			brand_name
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
	checkBrand
}