import Joi from "joi";
import { string, char, array, boolean, integer } from "./base";

export function create(payload) {
    const schema = Joi.object({
        name: char.required(),
        description: string,
        images: array.items(string).min(1).required()
    })

    const result = schema.validate(payload)

    if(result.error) return { error: result.error.message }
    return { error: null }
}

export function update(payload) {
    const schema = Joi.object({
        id: integer.required(),
        name: char,
        description: string,
        images: array.items(string).min(1),
        is_hide: boolean
    })

    const result = schema.validate(payload)

    if(result.error) return { error: result.error.message }
    return { error: null }
}