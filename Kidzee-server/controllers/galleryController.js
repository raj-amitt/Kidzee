import Gallery from "../models/Gallery.js";
import fs from "fs";
import sharp from "sharp";
import path from "path";


// =======================
// CREATE FOLDER
// =======================
export const createFolder = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Folder name required" });
    }

    const exists = await Gallery.findOne({ name });

    if (exists) {
      return res.status(400).json({ message: "Folder already exists" });
    }

    const folder = await Gallery.create({
      name,
      images: [],
    });

    res.json(folder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// =======================
// RENAME FOLDER
// =======================
export const renameFolder = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "New name required" });
    }

    const exists = await Gallery.findOne({ name });
    if (exists) {
      return res.status(400).json({ message: "Name already in use" });
    }

    const folder = await Gallery.findById(req.params.id);

    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }

    folder.name = name;
    await folder.save();

    res.json({ message: "Folder renamed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// =======================
// DELETE FOLDER
// =======================
export const deleteFolder = async (req, res) => {
  try {
    const folder = await Gallery.findById(req.params.id);

    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }

    // 🔥 delete all images from disk
    folder.images.forEach((imgPath) => {
      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    });

    await folder.deleteOne();

    res.json({ message: "Folder and images deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// =======================
// DELETE IMAGE
// =======================
export const deleteImage = async (req, res) => {
  try {
    const { folder, image } = req.body;

    const gallery = await Gallery.findOne({ name: folder });

    if (!gallery) {
      return res.status(404).json({ message: "Folder not found" });
    }

    gallery.images = gallery.images.filter((img) => img !== image);

    if (fs.existsSync(image)) {
      fs.unlinkSync(image);
    }

    await gallery.save();

    res.json({ message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// =======================
// UPLOAD IMAGES
// =======================
export const uploadImages = async (req, res) => {
  try {
    const { folder } = req.body;

    const gallery = await Gallery.findOne({ name: folder });

    if (!gallery) {
      return res.status(404).json({ message: "Folder not found" });
    }

    const folderPath = `uploads/gallery/${folder}`;

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const processedImages = [];

    for (let file of req.files) {
  const filename = Date.now() + ".webp";
  const filepath = path.join(folderPath, filename);

  await sharp(file.path)
    .resize({ width: 1200 })
    .webp({ quality: 70 })
    .toFile(filepath);

  // delete temp file
  fs.unlinkSync(file.path);

  processedImages.push(filepath.replace(/\\/g, "/"));
}

    gallery.images.push(...processedImages);
    await gallery.save();

    res.json({
      message: "Images uploaded",
      images: gallery.images,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// =======================
// GET ALL FOLDERS
// =======================
export const getFolders = async (req, res) => {
  try {
    const folders = await Gallery.find().sort({ createdAt: -1 });
    res.json(folders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// =======================
// GET SINGLE FOLDER
// =======================
export const getFolderImages = async (req, res) => {
  try {
    const { name } = req.params;

    const folder = await Gallery.findOne({ name });

    if (!folder) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(folder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};