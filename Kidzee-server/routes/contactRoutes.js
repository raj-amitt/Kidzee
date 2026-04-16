import express from "express";
import { sendEnquiry } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", sendEnquiry);

export default router;