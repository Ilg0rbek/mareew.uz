import Joi from "joi";
import { number, validate_data } from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    wishlist_id: number.required(),
  });
  validate_data(schema, data);
};

const POST = (data) => {
  const schema = Joi.object({
    wishlist_user_id: number.required(),
    wishlist_product_id: number.required(),
  });
  validate_data(schema, data);
};

const DELETE = (data) => {
  const schema = Joi.object({
    wishlist_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  POST,
  DELETE,
};
