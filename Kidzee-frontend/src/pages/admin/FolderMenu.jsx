import { useState } from "react";
import API from "../../api/axios";

const FolderMenu = ({ folder, refresh }) => {
  const [open, setOpen] = useState(false);

  // DELETE
  const handleDelete = async () => {
    if (!window.confirm("Delete this folder?")) return;

    await API.delete(`/gallery/folder/${folder._id}`);
    refresh();
  };

  // RENAME
  const handleRename = async () => {
    const newName = prompt("Enter new folder name", folder.name);
    if (!newName) return;

    await API.put(`/gallery/folder/${folder._id}`, {
      name: newName,
    });

    refresh();
  };

  return (
    <div className="relative">

      {/* 3 DOT */}
      <button
        onClick={() => setOpen(!open)}
        className="text-xl px-2"
      >
        ⋮
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow rounded text-sm w-32 z-50">

          <button
            onClick={handleRename}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100"
          >
            Rename
          </button>

          <button
            onClick={handleDelete}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500"
          >
            Delete
          </button>

        </div>
      )}

    </div>
  );
};

export default FolderMenu;