// src/pages/Signup.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='flex justify-center mt-[60px]'>
    <motion.div 
      className="w-full max-w-md bg-gradient-to-bl from-emerald-600 to-cyan-700 text-white p-8 rounded-3xl shadow-2xl"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="rounded-xl p-3 bg-white/10 focus:bg-white/20 focus:outline-none" />
        <input type="email" placeholder="Email" className="rounded-xl p-3 bg-white/10 focus:bg-white/20 focus:outline-none" />
        <input type="password" placeholder="Password" className="rounded-xl p-3 bg-white/10 focus:bg-white/20 focus:outline-none" />
        <button className="mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-yellow-400 hover:to-pink-500 font-bold shadow-lg transition-all">
          🌟 Sign Up
        </button>
      </form>
      <p className="mt-6 text-sm text-center">
        Already have an account? <Link to="/login" className="underline text-yellow-300">Log In</Link>
      </p>
    </motion.div>
    </div>
  );
}
