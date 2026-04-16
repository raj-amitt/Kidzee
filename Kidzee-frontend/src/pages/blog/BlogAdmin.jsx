import { useState } from "react";
import API from "../../api/axios";

const BlogAdmin = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [sections, setSections] = useState([
    { subheading: "", content: "", images: [] },
  ]);

  // ➕ ADD SECTION
  const addSection = () => {
    setSections([
      ...sections,
      { subheading: "", content: "", images: [] },
    ]);
  };

  // ✏️ UPDATE SECTION
  const updateSection = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  // 🖼️ ADD IMAGES TO SECTION
  const handleImageChange = (index, files) => {
    const updated = [...sections];
    updated[index].images = [...files];
    setSections(updated);
  };

  // ❌ REMOVE SECTION
  const removeSection = (index) => {
    const updated = sections.filter((_, i) => i !== index);
    setSections(updated);
  };

  // 🚀 SUBMIT BLOG
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // TITLE + COVER
      formData.append("title", title);
      if (cover) {
        formData.append("cover", cover);
      }

      // SECTIONS
      sections.forEach((sec, index) => {
        formData.append(
          `sections[${index}][subheading]`,
          sec.subheading
        );
        formData.append(
          `sections[${index}][content]`,
          sec.content
        );

        // IMAGES PER SECTION
        sec.images.forEach((img) => {
          formData.append(
            `sections[${index}][images]`,
            img
          );
        });
      });

      await API.post("/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Blog created");

      // RESET
      setTitle("");
      setCover(null);
      setSections([
        { subheading: "", content: "", images: [] },
      ]);

    } catch (err) {
      console.log(err);
      alert("Error creating blog");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h2 className="text-2xl mb-6">Create Blog</h2>

      {/* TITLE */}
      <input
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      {/* COVER IMAGE */}
      <input
        type="file"
        onChange={(e) => setCover(e.target.files[0])}
        className="mb-6"
      />

      {/* SECTIONS */}
      {sections.map((sec, index) => (
        <div key={index} className="mb-6 border p-4 rounded">

          {/* SUBHEADING */}
          <input
            placeholder="Subheading"
            value={sec.subheading}
            onChange={(e) =>
              updateSection(index, "subheading", e.target.value)
            }
            className="w-full border p-2 mb-2"
          />

          {/* CONTENT */}
          <textarea
            placeholder="Content"
            value={sec.content}
            onChange={(e) =>
              updateSection(index, "content", e.target.value)
            }
            className="w-full border p-2 mb-2"
          />

          {/* SECTION IMAGES */}
          <input
            type="file"
            multiple
            onChange={(e) =>
              handleImageChange(index, e.target.files)
            }
            className="mb-2"
          />

          {/* REMOVE SECTION */}
          <button
            onClick={() => removeSection(index)}
            className="text-red-500 mt-2"
          >
            Remove
          </button>

        </div>
      ))}

      {/* ADD SECTION */}
      <button
        onClick={addSection}
        className="bg-gray-200 px-4 py-2 mr-2"
      >
        + Add Section
      </button>

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        className="bg-purple-500 text-white px-6 py-2"
      >
        Publish Blog
      </button>

    </div>
  );
};

export default BlogAdmin;