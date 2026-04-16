import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/admin/Login";
import PrivateRoute from "./components/PrivateRoutes";

// Pages
import Home from "./pages/home/Home";
import ProgramDetail from "./pages/program/ProgramDetail";
import Daycare from "./pages/daycare/Daycare";
import GalleryAdmin from "./pages/admin/GalleryAdmin";
import SingleBlog from "./pages/blog/SingleBlog";
import FolderImages from "./pages/gallery/FolderImages";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import BlogAdmin from "./pages/blog/BlogAdmin"; // ⚠️ this is ADMIN blog page
import Blog from "./pages/blog/Blog";
import AboutPage from "./pages/about/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FolderAdmin from "./pages/admin/FolderAdmin";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramDetail />} />
        <Route path="/daycare" element={<Daycare />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:name" element={<FolderImages />} />
        <Route path="/contact" element={<Contact />} />

        {/* ⚠️ TEMP BLOG ROUTE (NO ADMIN UI HERE) */}
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:id" element={<SingleBlog />} />

        {/* 🔐 LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* 🔐 ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* GALLERY ADMIN */}
        <Route
          path="/admin/gallery"
          element={
            <PrivateRoute>
              <GalleryAdmin />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/gallery/:name"
          element={
            <PrivateRoute>
              <FolderAdmin />
            </PrivateRoute>
          }
        />

        {/* BLOG ADMIN */}
        <Route
          path="/admin/blogs"
          element={
            <PrivateRoute>
              <BlogAdmin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;