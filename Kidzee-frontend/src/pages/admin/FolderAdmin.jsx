import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

const FolderAdmin = () => {
  const { name } = useParams();

  const [folder, setFolder] = useState(null);
  const [files, setFiles] = useState([]);

  // 🔁 FETCH FOLDER DATA
  const fetchFolder = async () => {
    try {
      const res = await API.get(`/gallery/${name}`);
      setFolder(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFolder();
  }, [name]);

  // 📤 UPLOAD IMAGES
  const uploadImages = async () => {
    try {
      if (files.length === 0) {
        return alert("Select files first");
      }

      const formData = new FormData();
      formData.append("folder", name);

      files.forEach((file) => {
        formData.append("images", file);
      });

      await API.post("/gallery/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Uploaded");
      setFiles([]);
      fetchFolder();
    } catch (err) {
      console.log(err);
      alert("Upload failed");
    }
  };

  // 🗑️ DELETE IMAGE
  const deleteImage = async (imagePath) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      await API.delete("/gallery/image", {
        data: {
          folder: name,
          image: imagePath,
        },
      });

      fetchFolder();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6">

      <h2 className="text-xl mb-6 capitalize">{name}</h2>

      {/* UPLOAD SECTION */}
      <div className="mb-6 flex gap-3 items-center flex-wrap">
        <input
          type="file"
          multiple
          onChange={(e) => setFiles([...e.target.files])}
        />

        <button
          onClick={uploadImages}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>

      {/* IMAGES GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

        {folder?.images?.length > 0 ? (
          folder.images.map((img, i) => (
            <div key={i} className="relative group">

              <img
                src={`/${img}`}
                className="w-full aspect-[4/5] object-cover rounded"
              />

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteImage(img)}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                Delete
              </button>

            </div>
          ))
        ) : (
          <p>No images yet</p>
        )}

      </div>

    </div>
  );
};

export default FolderAdmin;