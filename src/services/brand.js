import { Brand, Product } from '../models'
import { attributes } from './query'

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
    const [result] = await Brand.update({
        where: { id }
    }, payload)
    return result
}

export async function removeById(id) {
    const result = await Brand.destroy({
        where: { id }
    })
    return result
}