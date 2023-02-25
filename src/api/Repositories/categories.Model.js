import query from "#query/categories.Query"
import db from "#config/db"
import Category from "#models/categories.Model"

const GET = async () => {
	return await Category.findAll()
}

const GET_ONE = async ({ category_id }) => {
	return await Category.findOne({
		where: {
			category_id
		}
	})
}

const GET_PRODUCTS = async ({ category_id, limit, offset }) => {
	const data = await limit ?
	Category.findAll({offset, limit})
	:
	Category.findAll({
		where :{
			category_id
		}
	})
	return data
}

const POST = async ({ category_name }) => {
    const [rows] = await Category.create({
		category_name
	})
	return rows
}

const PUT = async ({ category_id, category_name}) => {
	const [rows] = Category.update({category_name},{
		where:{
			category_id	
		}
	})
	return rows
}

const DELETE = async ({ category_id }) => {
	const [rows] = await Category.destroy({
		where :{
			category_id
		}
	})
	return rows
}

const checkCategory =  async ({ category_name }) => {
	const [rows] = await Category.findOne({
		where :{
			category_name
		}
	})
	return rows
}

export default {
	GET,
	GET_ONE,
	GET_PRODUCTS,
	POST,
	PUT,
	DELETE,
	checkCategory
}