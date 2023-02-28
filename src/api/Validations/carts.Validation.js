import Joi from "joi";
import { number, string, validate_data } from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    cart_id: number.required(),
  });
  validate_data(schema, data);
};

const POST = (data) => {
  const schema = Joi.object({
    cart_user_id: number,
    cart_product_id: number.required(),
    cart_quantity: number.required(),
    cart_product_color: string,
  });
  validate_data(schema, data);
};

const PUT = (data) => {
	const schema = Joi.object({
        cart_id: Joi.number().required(),
        cart_user_id: Joi.number(),
        cart_product_id: Joi.number(),
        cart_quantity: Joi.number(),
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
    cart_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  POST,
  PUT,
  DELETE,
};
