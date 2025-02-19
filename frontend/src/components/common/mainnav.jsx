import React from "react";
import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">
        Quiz Master
      </Link>
      <div>
        <Link
          to="/login"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-2 hover:bg-blue-100 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  </nav>
  );
}