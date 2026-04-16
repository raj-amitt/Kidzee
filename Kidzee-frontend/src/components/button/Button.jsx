import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/contact")} // ✅ built-in navigation
      className="bg-yellow-400 border-2 border-[#985CC7] text-black font-heading 
px-2 py-1 text-xs lg:px-3.5 lg:py-1.5 lg:text-sm 
rounded-full hover:scale-105 transition"
    >
      {text}
    </button>
  );
};

export default Button;