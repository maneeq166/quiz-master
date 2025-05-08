import React from "react";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6FD8] via-[#3813C2] to-[#B621FE] mb-6">
        Welcome to Quizora!
      </h1>

      <p className="text-lg text-gray-200 max-w-xl text-center mb-10">
        Test your knowledge and earn digital currency across Easy, Medium, and
        Hard questions powered by AI.
      </p>

      <div className="space-x-6">
        <button
          onClick={async () => {
            navigate("/login");
          }}
          className="px-6 py-3 bg-gradient-to-r from-[#ff4b1f] to-[#1fddff] text-white rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Login
        </button>
        <button
          onClick={async () => {
            navigate("/register");
          }}
          className="px-6 py-3 bg-gradient-to-r from-[#DA22FF] to-[#9733EE] text-white rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
