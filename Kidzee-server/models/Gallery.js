import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  images: [String], // image paths
}, { timestamps: true });

export default mongoose.model("Gallery", gallerySchema);