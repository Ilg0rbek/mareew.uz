import Joi from "joi";
import { number, phone_number, string, validate_data } from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    user_id: number.required(),
  });
  validate_data(schema, data);
};

const POST = (data) => {
  const schema = Joi.object({
    user_phone: phone_number.required(),
    user_first_name: string.min(3).required(),
    user_last_name: string.min(3),
    user_password: string.min(6).required(),
    user_role: string.valid("admin", "user"),
    user_telegram_id: string.min(7),
  });
  validate_data(schema, data);
};

const PUT = (data) => {
  const schema = Joi.object({
    user_id: number.required(),
    user_phone: phone_number,
    user_first_name: string.min(3),
    user_last_name: string.min(3),
    user_password: string.min(6),
    user_telegram_id: string.min(7),
    user_role: string.valid("admin", "user"),
  });
  validate_data(schema, data);
};

const DELETE = (data) => {
  const schema = Joi.object({
    user_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  POST,
  PUT,
  DELETE,
};
