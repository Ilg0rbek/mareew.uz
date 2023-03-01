import Joi from "joi";

export const number = Joi.number()
export const integer = number.integer().min(1)

export const string = Joi.string()
export const char = string.min(1).max(255)

export const array = Joi.array()

export const boolean = Joi.boolean()