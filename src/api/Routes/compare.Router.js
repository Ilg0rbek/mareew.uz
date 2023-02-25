import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/compare.Controller";

const router = express.Router();

router.post("/compare", checkTokenMiddleware, controller.POST);

export default router;