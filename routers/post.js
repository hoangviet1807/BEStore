import express from "express";
import { getPost, createPost, getDetailPost } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPost);

router.get("/:id", getDetailPost);

router.post("/", createPost);

export default router;
