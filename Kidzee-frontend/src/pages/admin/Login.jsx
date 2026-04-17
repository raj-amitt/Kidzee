import { useState } from "react";
import API from "../../api/axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



const handleLogin = async () => {
  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);

    window.location.href = "/admin";
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3EDF7]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

        <h2 className="text-2xl font-heading mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 border p-3 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 border p-3 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#985CC7] text-white py-3 rounded hover:opacity-90"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;