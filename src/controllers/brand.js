import { brandService } from '../services/index.js'
import { brandValidator, commonValidator } from '../validators/index.js'
import { badRequest, notFound } from '../utils/index.js'

export async function all(req, res, next) {
    try {
        const brands = await brandService.all()

        return res.json({ ok: true, brands })
    } catch(err) {
        next(err)
    }
}

export async function oneById(req, res, next) {
    try {
        const { id } = req.params

        const { error } = commonValidator.id({ id })
        if(error) throw badRequest(error)

        const brand = await brandService.oneById(id)
        if(!brand) throw notFound('Brand')

        return res.json({ ok: true, brand })
    } catch(err) {
        next(err)
    }
}

export async function create(req, res, next) {
    try {
        const payload = req.body

        const { error } = brandValidator.create(payload)
        if(error) throw badRequest(error)

        const brand = await brandService.create(payload)

        return res.json({ ok: true, brand })
    } catch(err) {
        next(err)
    }
}

export async function update(req, res, next) {
    try {
        const { id } = req.params
        const payload = req.body

        const { error } = brandValidator.update({ id, ...payload })
        if(error) throw badRequest(error)

        const count = await brandService.updateById(id, payload)
        if(count === 0) throw notFound('Brand')

        return res.json({ ok: true })
    } catch(err) {
        next(err)
    }
}

export async function remove(req, res, next) {
    try {
        const { id } = req.params
        
        const { error } = commonValidator.id({ id })
        if(error) throw badRequest(error)

        const count = await brandService.removeById(id)
        if(count === 0) throw notFound('Brand')

        return res.json({ ok: true })
    } catch(err) {
        next(err)
    }
}