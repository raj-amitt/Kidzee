import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

const Gallery = () => {
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFolders = async () => {
      const res = await API.get("/gallery");
      setFolders(res.data);
    };

    fetchFolders();
  }, []);

  return (
  <div className="py-12 bg-gradient-to-b from-[#f8f9ff] to-[#eef1ff]">

    {/* SECTION TITLE */}
    <h2 className="text-3xl font-heading text-center mb-10">
      Our Gallery
    </h2>

    {/* CENTER WRAPPER */}
    <div className="max-w-6xl mx-auto px-4">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {folders.map((folder) => (
          <div
            key={folder._id}
            onClick={() => navigate(`/gallery/${folder.name}`)}
            className="cursor-pointer bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >

            {/* IMAGE */}
            {folder.images.length > 0 && (
              <img
                src={`http://localhost:5000/${folder.images[0]}`}
                alt=""
                className="w-full h-48 object-cover rounded-lg"
              />
            )}

            {/* TITLE */}
            <h3 className="mt-4 text-center font-semibold text-gray-800">
              {folder.name}
            </h3>

          </div>
        ))}

      </div>

    </div>

  </div>
);
};

export default Gallery;