import Joi from "joi";
import { number, string, validate_data } from "./validation";

const POST = (data) => {
  const schema = Joi.object({
    category_name: string.min(3).required(),
  });
  validate_data(schema, data);
};

const PUT = (data) => {
  const schema = Joi.object({
    category_id: number.required(),
    category_name: string.min(3).required(),
  });
  validate_data(schema, data);
};

const DELETE = (data) => {
  const schema = Joi.object({
    category_id: number.required(),
  });
  validate_data(schema, data);
};

const GET_ONE = (data) => {
  const schema = Joi.object({
    category_id: Joi.number().required(),
  });
  validate_data(schema, data);
};

const GET_PRODUCTS = (data) => {
  const schema = Joi.object({
    category_id: Joi.number().required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  GET_PRODUCTS,
  POST,
  PUT,
  DELETE,
};
