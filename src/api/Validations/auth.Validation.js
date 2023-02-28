import Joi from "joi";
import { phone_number, string, validate_data } from "./validation";

const LOGIN = (data) => {
  const schema = Joi.object({
    user_phone: phone_number.required(),
    user_password: string.min(3).required(),
  });
  validate_data(schema, data);
};

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
