import Joi from "joi";

export const phone_number = Joi.string().pattern(
  new RegExp("^998[389][012345789][0-9]{7}$")
);

export const string = Joi.string();

export const number = Joi.number();

export const array = Joi.array();

export const obj = Joi.object();

export const validate_data = (schema, data) => {
  try {
    const validate = schema.validate(data).error;
    if (validate) {
      return {
        status: false,
        message: validate.details[0].message,
      };
    }
    return {
      status: true,
    };
  } catch (err) {
    return { err: err.message };
  }
};
