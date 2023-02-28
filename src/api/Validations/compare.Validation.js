import Joi from "joi";
import { number, validate_data } from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    first_product_id: number.required(),
    second_product_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
};
