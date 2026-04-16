import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  subheading: String,
  content: String,
  images: [String], // 🔥 NEW
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    coverImage: { type: String },
    sections: [sectionSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);