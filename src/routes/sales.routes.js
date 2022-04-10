import { Router } from "express";
import { getOrderDetail } from "../controllers/sales.controller";
import { getAvailableProducts, getAvailableProductsA } from "../controllers/production.controller";

const router = Router();

router.get("/sales", getOrderDetail);
router.get("/sales/purchase/:id", getAvailableProductsA);

export default router;