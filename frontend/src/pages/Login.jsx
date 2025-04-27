// src/pages/Login.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login success:", res.data);
      // Save token into localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
    } catch (error) {
      console.error(
        "Login error:",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="flex justify-center mt-[80px]">
      <motion.div
        className="w-full max-w-md bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 rounded-3xl shadow-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl p-3 bg-white/10 focus:bg-white/20 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-xl p-3 bg-white/10 focus:bg-white/20 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-4 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 font-bold shadow-lg transition-all">
            🚀 Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="underline text-yellow-300">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
