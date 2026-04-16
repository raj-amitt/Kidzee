import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

const FolderImages = () => {
  const { name } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await API.get(`/gallery/${name}`);
      setImages(res.data.images);
    };

    fetchImages();
  }, [name]);

  return (
  <div className="p-6">

    {/* TITLE */}
    <h2 className="text-2xl font-heading mb-6 text-center">
      {name}
    </h2>

    {/* CENTER WRAPPER */}
    <div className="max-w-6xl mx-auto">

      {/* MASONRY GRID */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

        {images.map((img, index) => (
          <div key={index} className="break-inside-avoid">

            <img
              src={`http://localhost:5000/${img}`}
              alt=""
              className="w-full rounded-lg shadow hover:scale-105 transition duration-300"
            />

          </div>
        ))}

      </div>

    </div>

  </div>
);
};

export default FolderImages;