import Joi from "joi";
import {
  array,
  number,
  phone_number,
  string,
  validate_data,
} from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    order_id: number.required(),
  });
  validate_data(schema, data);
};

const POST = (data) => {
  const schema = Joi.object({
    order_user_id: number.required(),
    order_content: array
      .items(
        Joi.object({
          order_product_id: number.required(),
          order_quantity: number.required(),
          order_product_name: string.required(),
          order_image: string,
          order_color: string,
        })
      )
      .required(),
    order_status: string.valid("pending", "approve", "denied"),
    order_address: string.required(),
    order_phone_number: phone_number,
  });
  validate_data(schema, data);
};

const PUT = (data) => {
  const schema = Joi.object({
    order_id: number.required(),
    order_user_id: number,
    order_content: array
      .items(
        Joi.object({
          order_product_id: number.required(),
          order_quantity: number.required(),
          order_product_name: string.required(),
          order_image: string,
          order_color: string,
        })
      )
      .required(),
    order_status: string.valid("pending", "approve", "denied"),
    order_phone_number: phone_number,
    order_address: string,
  });
  validate_data(schema, data);
};

const DELETE = (data) => {
  const schema = Joi.object({
    order_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  POST,
  PUT,
  DELETE,
};
