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
router.get("/search/:searchText", searchProduct);
router.post("/", createProduct);

export default router;
