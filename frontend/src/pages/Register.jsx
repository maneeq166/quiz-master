// src/pages/Signup.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
        name,
        email,
        password,
      });
      

      console.log("Signup success:", res.data);
      alert("Signup successful! You can login now.");
    } catch (error) {
      console.error(
        "Signup error:",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div className="flex justify-center mt-[60px]">
      <motion.div
        className="w-full max-w-md bg-gradient-to-bl from-emerald-600 to-cyan-700 text-white p-8 rounded-3xl shadow-2xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-xl p-3 bg-white/10 focus:bg-white/20 focus:outline-none"
            onChange={(e) => setName(e.target.value)}
          />
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
          <button className="mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-yellow-400 hover:to-pink-500 font-bold shadow-lg transition-all">
            🌟 Sign Up
          </button>
        </form>
        <p className="mt-6 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline text-yellow-300">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
