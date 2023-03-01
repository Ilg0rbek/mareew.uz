import { categoryService } from '../services/index.js'
import { commonValidator } from '../validators/index.js'
import { badRequest, notFound } from '../utils/index.js'

export async function all(req, res, next) {
    try {
        const categories = await categoryService.all()

        return res.json({ ok: true, categories })
    } catch(err) {
        next(err)
    }
}

export async function oneById(req, res, next) {
    try {
        const { id } = req.params

        const { error } = commonValidator.id({ id })
        if(error) throw badRequest(error)

        const category = await categoryService.oneById(id)
        if(!category) throw notFound('Category')

        return res.json({ ok: true, category })
    } catch(err) {
        next(err)
    }
}

export async function create(req, res, next) {
    try {
        const payload = req.body

        // const { error } = categoryValidator.create(payload)
        // if(error) throw badRequest(error)

        const category = await categoryService.create(payload)

        return res.json({ ok: true, category })
    } catch(err) {
        next(err)
    }
}

export async function update(req, res, next) {
    try {
        const { id } = req.params
        const payload = req.body

        // const { error } = categoryValidator.update({ id, ...payload })
        // if(error) throw badRequest(error)

        const count = await categoryService.updateById(id, payload)
        if(count === 0) throw notFound('Category')

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

        const count = await categoryService.removeById(id)
        if(count === 0) throw notFound('Category')

        return res.json({ ok: true })
    } catch(err) {
        next(err)
    }
}