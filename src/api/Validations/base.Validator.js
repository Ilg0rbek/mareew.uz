import Joi from 'joi'


export const char = Joi.string().min(1).max(255)
export const string = Joi.string()
export const phone_number = string.pattern(new RegExp('^998[389][012345789][0-9]{7}$'))