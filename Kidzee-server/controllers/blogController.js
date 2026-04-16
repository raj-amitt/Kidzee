import Blog from "../models/Blog.js";
import fs from "fs";
import sharp from "sharp";
import path from "path";


export const createBlog = async (req, res) => {
  try {
    const { title } = req.body;

    // Create empty blog first
    const blog = await Blog.create({
      title,
      coverImage: "",
      sections: [],
    });

    const blogDir = `uploads/blogs/${blog._id}`;

    // Create folder
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    let coverImage = "";
    let sections = [];

    // Parse text fields
    Object.keys(req.body).forEach((key) => {
      if (key.includes("subheading")) {
        const index = key.match(/\d+/)[0];

        if (!sections[index]) {
          sections[index] = {
            subheading: "",
            content: "",
            images: [],
          };
        }

        sections[index].subheading = req.body[key];
      }

      if (key.includes("content")) {
        const index = key.match(/\d+/)[0];

        if (!sections[index]) {
          sections[index] = {
            subheading: "",
            content: "",
            images: [],
          };
        }

        sections[index].content = req.body[key];
      }
    });

    // Handle files
    for (let file of req.files) {
  const filename = Date.now() + ".webp";
  const newPath = path.join(blogDir, filename);

  await sharp(file.buffer)
    .resize({ width: 1200 })
    .webp({ quality: 70 })
    .toFile(newPath);

  const finalPath = newPath.replace(/\\/g, "/");

  if (file.fieldname === "cover") {
    coverImage = finalPath;
  } else {
    const match = file.fieldname.match(/\d+/);

    if (match) {
      const index = match[0];

      if (!sections[index]) {
        sections[index] = {
          subheading: "",
          content: "",
          images: [],
        };
      }

      sections[index].images.push(finalPath);
    }
  }
}

    blog.coverImage = coverImage;
    blog.sections = sections;

    await blog.save();

    res.json({ message: "Blog created", blog });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

export const getSingleBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
};