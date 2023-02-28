import Joi from "joi";
import { number, string, validate_data } from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    comment_id: number.required(),
  });
  validate_data(schema, data);
};

const POST = (data) => {
  const schema = Joi.object({
    comment_user_id: number.required(),
    comment_product_id: number.required(),
    comment_content: string.required(),
    comment_stars: number.required(),
  });
  validate_data(schema, data);
};

const PUT = (data) => {
  const schema = Joi.object({
    comment_id: number.required(),
    comment_user_id: number,
    comment_product_id: number,
    comment_status: string.valid("pending", "approve", "denied"),
    comment_content: string,
    comment_stars: number,
  });
  validate_data(schema, data);
};

const DELETE = (data) => {
  const schema = Joi.object({
    comment_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  POST,
  PUT,
  DELETE,
};
