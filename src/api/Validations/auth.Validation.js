import Joi from "joi"
import { phone_number } from "./base.Validator"

const LOGIN = (data) => {
    const schema = Joi.object({
        user_phone: phone_number.required(),
        user_password: Joi.string().min(3).required()
    })
    try {
        const result = schema.validate(data)
        if (result.error) {
            return {
                status: false, message: result.error.message,
            }
        }
        return {
            status: true, message: null
        }
    } catch (err) {
        return { status: false, message: err.message }
    }
}

const REGISTER = (data) => {
  const schema = Joi.object({
    user_phone: phone_number.required(),
    user_first_name: string.min(3).required(),
    user_last_name: string.min(3),
    user_password: string.min(6).required(),
    user_telegram_id: string.min(8),
  });
  validate_data(schema, data);
};

export default {
  LOGIN,
  REGISTER,
};
