import { Router } from "express";
import { getProducts } from "../controllers/production.controller";

const router = Router();

router.get("/products", getProducts);

export default router;
