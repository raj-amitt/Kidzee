import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import FolderMenu from "./FolderMenu";

const GalleryAdmin = () => {
  const [folder, setFolder] = useState("");
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();

  // 🔁 FETCH ALL FOLDERS
  const fetchFolders = async () => {
    try {
      const res = await API.get("/gallery");
      setFolders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  // ✅ CREATE FOLDER (UNCHANGED + REFRESH)
  const createFolder = async () => {
    try {
      await API.post("/gallery/folder", { name: folder });
      alert("Folder created");
      setFolder("");
      fetchFolders(); // refresh list
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  // 🗑️ DELETE FOLDER (NEW)
  const deleteFolder = async (id) => {
    if (!window.confirm("Delete this folder?")) return;

    try {
      await API.delete(`/gallery/folder/${id}`);
      fetchFolders();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-6">Gallery Admin</h2>

      {/* CREATE + UPLOAD (EXISTING UI) */}
      <div className="mb-8">
        <input
          placeholder="Folder name"
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          className="border p-2 mr-2"
        />

        <button
          onClick={createFolder}
          className="bg-purple-500 text-white px-3 py-2 mr-3"
        >
          Create Folder
        </button>

        <br />
        <br />
      </div>

      {/* 📁 FOLDERS GRID (NEW) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {folders.map((f) => (
          <div key={f._id} className="bg-white p-4 rounded shadow relative">
            <div
              className="absolute top-2 right-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FolderMenu folder={f} refresh={fetchFolders} />
            </div>

            {/* 📂 OPEN FOLDER */}
            <div
              onClick={() => navigate(`/admin/gallery/${f.name}`)}
              className="cursor-pointer"
            >
              {/* Thumbnail (if exists) */}
              {f.images?.length > 0 && (
  <img
    src={`/${f.images[0]}`}
    alt=""
    className="w-full h-32 object-cover rounded mb-2"
    loading="lazy"
  />
)}

              <h3 className="text-center font-semibold">{f.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAdmin;
