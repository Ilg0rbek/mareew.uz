import { Router } from "express";

import { brandController } from "../controllers/index.js";

export const brand = Router()

brand.get('/', brandController.all)

brand.get('/:id', brandController.oneById)

brand.post('/', brandController.create)

brand.put('/:id', brandController.update)

brand.delete('/:id', brandController.remove)