import express from "express";

import checkTokenMiddleware from "#middlewares/checkToken.Middleware";
import controller from "#controllers/wishlists.Controller";

const router = express.Router();

router.get("/wishlists", checkTokenMiddleware, controller.GET);
router.get("/wishlists/:wishlist_id", checkTokenMiddleware,controller.GET_ONE);

router.post("/wishlists", checkTokenMiddleware, controller.POST);
// router.post("/wishlists_product", checkTokenMiddleware, controller.GET_PRODUCT);
router.delete("/wishlists", checkTokenMiddleware, controller.DELETE);

export default router;

