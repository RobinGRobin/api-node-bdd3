import { Router } from "express";
import { getOrderDetail } from "../controllers/sales.controller";

const router = Router();

router.get("/sales", getOrderDetail);

export default router;