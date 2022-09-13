import express from "express";
import {
  createProduct,
  getDataAFollowingType,
  getDetailProduct,
  getProduct,
  searchProduct,
} from "../controllers/products.js";

const router = express.Router();
router.get("/", getProduct);
router.get("/:id", getDetailProduct);
router.get("/category/:category", getDataAFollowingType);
router.post("/", createProduct);
router.get("/search", searchProduct);

export default router;
