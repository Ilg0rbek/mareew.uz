import { Router } from "express";

import { brand } from "./brand.js";
import { category } from "./category.js";

export const root = Router()

root.use('/brand', brand)

root.use('/category', category)