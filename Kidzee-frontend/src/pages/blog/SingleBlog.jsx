import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const res = await API.get(`/blog/${id}`);
      setBlog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* 🖼️ COVER IMAGE */}
      {blog.coverImage && (
        <img
          src={`http://localhost:5000/${blog.coverImage}`}
          className="w-full max-h-[400px] object-cover rounded mb-6"
          alt="cover"
        />
      )}

      {/* 📝 TITLE */}
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>

      {/* 📄 SECTIONS */}
      {blog.sections?.map((sec, i) => (
        <div key={i} className="mb-8">

          {/* 🔹 SUBHEADING */}
          {sec.subheading && (
            <h2 className="text-xl font-semibold mb-3">
              {sec.subheading}
            </h2>
          )}

          {/* 🔹 CONTENT */}
          {sec.content && (
            <p className="text-gray-700 leading-relaxed mb-4">
              {sec.content}
            </p>
          )}

          {/* 🖼️ SECTION IMAGES */}
          {sec.images?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sec.images.map((img, idx) => (
                <img
                  key={idx}
                  src={`http://localhost:5000/${img}`}
                  className="w-full rounded shadow-sm"
                  alt="blog"
                />
              ))}
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default SingleBlog;