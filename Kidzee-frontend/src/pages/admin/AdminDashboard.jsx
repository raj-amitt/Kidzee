import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-heading">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* 📸 GALLERY */}
        <div
          onClick={() => navigate("/admin/gallery")}
          className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg transition"
        >
          📸 Manage Gallery
        </div>

        {/* 📝 BLOGS */}
        <div
          onClick={() => navigate("/admin/blogs")}
          className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg transition"
        >
          📝 Manage Blogs
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;