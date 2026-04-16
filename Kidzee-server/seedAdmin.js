import mongoose from "mongoose";
import dotenv from "dotenv-flow";
import bcrypt from "bcryptjs";

import Admin from "./models/Admin.js";
import connectDB from "./config/db.js";

dotenv.config();

const seedAdmin = async () => {
  await connectDB();

  const email = "admin@kidzee.com";
  const password = "papnai@123"; 

  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await Admin.findOne({ email });

  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  await Admin.create({
    email,
    password: hashedPassword,
  });

  console.log("Admin created");
  process.exit();
};

seedAdmin();