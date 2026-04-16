import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if admin exists
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate token
    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // send response
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};