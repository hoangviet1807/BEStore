import express from "express";
import {
  createProduct,
  getDetailProduct,
  getProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProduct);
router.get("/:id", getDetailProduct);
router.post("/", createProduct);

export default router;
