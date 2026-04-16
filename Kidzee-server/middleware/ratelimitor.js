import rateLimit from "express-rate-limit";

// 🔐 General limiter
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // 100 requests per IP
  message: "Too many requests, please try again later",
});

// 🔐 Strict limiter (for auth + forms)
export const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many attempts, slow down",
});