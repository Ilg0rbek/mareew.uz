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
    cart_id: number.required(),
    cart_user_id: number.required(),
    cart_product_id: number,
    cart_quantity: number.required(),
  });
  validate_data(schema, data);
};

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
