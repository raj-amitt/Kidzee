import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import { globalLimiter } from "./middleware/ratelimitor.js";
import authRoutes from "./routes/authRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const app = express();

app.use(globalLimiter); // applies to all routes


// ✅ 1. MIDDLEWARE
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ 2. DATABASE CONNECTION
connectDB();


// ✅ 3. STATIC FOLDER (IMPORTANT for images)
app.use("/uploads", express.static("uploads"));


// ✅ 4. ROUTES
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/contact", contactRoutes);

// ✅ 5. GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message || "Server Error",
  });
});


// ✅ 6. SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
