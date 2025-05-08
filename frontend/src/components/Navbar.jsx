import React from "react";

export default function Navbar({ currency }) {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 shadow-md">
      <h1
        onClick={() => {
          window.location.href = "/home";
        }}
        className="cursor-pointer text-3xl font-extrabold text-yellow-300 drop-shadow"
      >
        Quizora 🧠
      </h1>
      <div className="text-white font-bold flex items-center gap-2">
        <span className="text-yellow-300 text-lg mr-[20px]">
          💰 {currency} currency
        </span>
        <button
          onClick={() => {
            if (confirm("Are you sure you want to logout?")) {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
