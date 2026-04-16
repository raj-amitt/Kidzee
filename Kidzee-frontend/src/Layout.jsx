import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin") || location.pathname === "/login";

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
};

export default Layout;