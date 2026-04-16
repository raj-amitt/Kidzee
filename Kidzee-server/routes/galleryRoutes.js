import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  createFolder,
  uploadImages,
  getFolders,
  getFolderImages,
  renameFolder,
  deleteFolder,
  deleteImage,
} from "../controllers/galleryController.js";

const router = express.Router();

// 🔐 ADMIN ROUTES
router.post("/folder", authMiddleware, createFolder);
router.put("/folder/:id", authMiddleware, renameFolder);
router.delete("/folder/:id", authMiddleware, deleteFolder);

router.post("/upload", authMiddleware, upload.array("images", 10), uploadImages);
router.delete("/image", authMiddleware, deleteImage);

// 🌍 PUBLIC ROUTES
router.get("/", getFolders);
router.get("/:name", getFolderImages);

export default router;