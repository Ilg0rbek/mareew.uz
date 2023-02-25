import Joi from "joi"

const GET_ONE = (data) => {
	const schema = Joi.object({
		order_id: Joi.number().required() 
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}	
}

const POST = (data) => {
	const schema = Joi.object({
		order_user_id: Joi.number().required(),
		order_content: Joi.array().items(
			Joi.object({
				order_product_id: Joi.number().required(),
				order_quantity: Joi.number().required(),
				order_product_name: Joi.string().required(),
				order_image: Joi.string(),
				order_color: Joi.string(),
			})
		).required(),
		order_status: Joi.string().valid("pending", "approve", "denied"),
		order_address: Joi.string().required(),
		order_phone_number: Joi.string().pattern(new RegExp('^998[389][012345789][0-9]{7}$')).required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

const PUT = (data) => {
	const schema = Joi.object({
		order_id: Joi.number().required(),
		order_user_id: Joi.number(),
		order_content: Joi.array().items(
			Joi.object({
				order_product_id: Joi.number().required(),
				order_quantity: Joi.number().required(),
				order_product_name: Joi.string().required(),
				order_image: Joi.string(),
				order_color: Joi.string(),
			})
		).required(),
		order_status: Joi.string().valid('pending', 'approve', 'denied'),
		order_phone_number: Joi.string().pattern(new RegExp('^998[389][012345789][0-9]{7}$')),
		order_address: Joi.string(),
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

const DELETE = (data) => {
	const schema = Joi.object({
		order_id: Joi.number().required()
	})
	try{
		if(schema.validate(data).error) {
			return {
				status: false,
				message: schema.validate(data).error.details[0].message,
			}
		}
		return {
			status: true,
		}
	}catch(err){
		return err
	}
}

export default {
	GET_ONE,
	POST,
	PUT,
	DELETE
}