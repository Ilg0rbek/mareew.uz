import { Router } from "express";

import { brand } from "./brand.js";

export const root = Router()

root.use('/brand', brand)