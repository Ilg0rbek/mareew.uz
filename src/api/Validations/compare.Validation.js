import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		first_product_id: Joi.number().required(),
		second_product_id: Joi.number().required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true
		}
	}catch(err){
		return err
	}
}

export default {
	GET_ONE
}