import { Brand, Product } from '../models/index.js'
import { attributes } from './query.js'

export async function all(where) {
    const result = await Brand.findAll({
        attributes: attributes.brandExtended,
        where
    })
    return result
}

export async function oneById(id) {
    const result = await Brand.findOne({
        attributes: attributes.brandExtended,
        where: { id }
    })
    return result
}

export async function one(where) {
    const result = await Brand.findOne({
        attributes: attributes.brandExtended,
        where
    })
    return result
}

export async function create(payload) {
    const result = await Brand.create(payload)
    return result
}

export async function updateById(id, payload) {
    const [result] = await Brand.update(payload, {
        where: { id }
    })
    return result
}

export async function removeById(id) {
    const result = await Brand.destroy({
        where: { id }
    })
    return result
}