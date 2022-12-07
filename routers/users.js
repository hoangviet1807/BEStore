import express from "express";
import { register, getUsers, login, searchUser } from "../controllers/users.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.get("/", verifyToken, getUsers);
router.post("/login", login)
router.get("/search/:searchText", searchUser)

export default router;