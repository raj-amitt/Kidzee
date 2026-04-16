import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createBlog,
  getBlogs,
  getSingleBlog,
} from "../controllers/blogController.js";

const router = express.Router();

// ADMIN

router.post("/", authMiddleware, upload.any(), createBlog);

// PUBLIC
router.get("/", getBlogs);
router.get("/:id", getSingleBlog);

export default router;