import { Category } from '../models/index.js'
import { attributes } from './query.js'

export async function all(where) {
    const result = await Category.findAll({
        attributes: attributes.categoryExtended,
        where
    })
    return result
}

export async function oneById(id) {
    const result = await Category.findOne({
        attributes: attributes.categoryExtended,
        where: { id }
    })
    return result
}

export async function one(where) {
    const result = await Category.findOne({
        attributes: attributes.categoryExtended,
        where
    })
    return result
}

export async function create(payload) {
    const result = await Category.create(payload)
    return result
}

export async function updateById(id, payload) {
    const [result] = await Category.update(payload, {
        where: { id }
    })
    return result
}

export async function removeById(id) {
    const result = await Category.destroy({
        where: { id }
    })
    return result
}