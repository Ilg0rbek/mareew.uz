import { Router } from "express";

import { categoryController } from "../controllers/index.js";

export const category = Router()

category.get('/', categoryController.all)

category.get('/:id', categoryController.oneById)

category.post('/', categoryController.create)

category.put('/:id', categoryController.update)

category.delete('/:id', categoryController.remove)