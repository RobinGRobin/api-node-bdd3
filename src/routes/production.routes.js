import { Router } from "express";
import { getProducts } from "../controllers/production.controller";
import { getAvailableProducts } from "../controllers/production.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/aproducts", getAvailableProducts);

export default router;
