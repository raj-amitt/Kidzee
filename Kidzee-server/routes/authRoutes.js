import express from "express";
import { login } from "../controllers/authController.js";
import { strictLimiter } from "../middleware/ratelimitor.js";


const router = express.Router();

// REAL LOGIN ROUTE
router.post("/login", strictLimiter, login);

export default router;