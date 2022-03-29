import express from "express";
import {
  createProduct,
  getDataAFollowingType,
  getDetailProduct,
  getProduct,
} from "../controllers/products.js";

const router = express.Router();
router.get("/", getProduct);
router.get("/:id", getDetailProduct);
router.get("/category/:category", getDataAFollowingType);
router.post("/", createProduct);

export default router;
