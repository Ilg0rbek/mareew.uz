import Joi from "joi";
import { number, string, validate_data } from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    color_id: number.required(),
  });
  validate_data(schema, data);
};

const POST = (data) => {
  const schema = Joi.object({
    color_name: string.min(3).required(),
  });
  validate_data(schema, data);
};

const PUT = (data) => {
  const schema = Joi.object({
    color_id: number.required(),
    color_name: string.min(3).required(),
  });
  validate_data(schema, data);
};

const DELETE = (data) => {
  const schema = Joi.object({
    color_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  POST,
  PUT,
  DELETE,
};
