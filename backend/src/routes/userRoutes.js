import express from "express";
import { login, logout, signup} from "../controllers/userController.js"
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkAuth } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

router.get("/check", protectRoute, checkAuth);

export default router;