import Joi from "joi"
import { array, integer } from "./base"

export function id(payload) {
    const keys = Object.keys(payload)

    const schemaMap = {}
    keys.forEach(key => {
        schemaMap[key] = integer
    })

    const schema = Joi.object(schemaMap)

    const result = schema.validate(payload)

    if(result.error) return { error: result.error.message }
    return { error: null }
}