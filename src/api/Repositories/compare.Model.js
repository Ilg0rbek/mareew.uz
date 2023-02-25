import query from "#query/compare.Query"
import db from "#config/db"
import Compare from "#models/compare.Model"

const GET_ONE = async ({ product_id }) => {
	return await Compare.findOne({
		where:{
			product_id
		}
	})
}

const checkProduct = async ({ product_id }) => {
	return await Compare.findOne({
		where:{
			product_id
		}
	})
}

export default {
	GET_ONE,
	checkProduct
}