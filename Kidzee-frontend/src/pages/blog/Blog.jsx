import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blog");
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h2 className="text-2xl mb-6">Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {blogs.map((blog) => (
          
          <div
            key={blog._id}
            onClick={() => navigate(`/blog/${blog._id}`)}
            className="bg-white rounded shadow cursor-pointer hover:shadow-lg transition"
          >

            <img
              src={`/${blog.coverImage}`}
              className="w-full h-48 object-cover rounded-t"
            />

            <div className="p-4">
              <h3 className="font-semibold">{blog.title}</h3>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Blog;