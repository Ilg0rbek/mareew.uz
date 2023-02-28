import Joi from "joi";
import { array, number, obj, string, validate_data } from "./validation";

const GET_ONE = (data) => {
  const schema = Joi.object({
    product_id: number.required(),
  });
  validate_data(schema, data);
};

const GET_COMMENTS = (data) => {
  const schema = Joi.object({
    product_id: number.required(),
  });
  validate_data(schema, data);
};

const POST = (data) => {
  const schema = Joi.object({
    product_name: string.required(),
    product_brand_id: number.required(),
    product_category_id: number.required(),
    product_price: number.required(),
    product_images: array.required(),
    product_colors: array.required(),
    product_details: obj.required(),
    product_description: string.required(),
    product_stock: number.required(),
    product_status_new: number,
    product_status_sale: number,
    product_safe_price: number,
    product_shipping_price: number,
  });
  validate_data(schema, data);
};

const PUT = (data) => {
  const schema = Joi.object({
    product_id: number.required(),
    product_name: string,
    product_brand_id: number,
    product_category_id: number,
    product_price: number,
    product_images: array.items(string),
    product_colors: array,
    product_details: obj,
    product_description: string,
    product_stock: number,
    product_status_new: number,
    product_status_sale: number,
    product_safe_price: number,
    product_shipping_price: number,
  });
  validate_data(schema, data);
};

const DELETE = (data) => {
  const schema = Joi.object({
    product_id: number.required(),
  });
  validate_data(schema, data);
};

export default {
  GET_ONE,
  GET_COMMENTS,
  POST,
  PUT,
  DELETE,
};
