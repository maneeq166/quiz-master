import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaCoins } from 'react-icons/fa';
import mascot from '../assets/images.jpeg'; // Add your mascot image here

export default function Home() {
  const [currency, setcurrency] = useState(0);
  const user = true; // Simulate logged-in user

  useEffect(() => {
    if (user) {
      setcurrency(120); // Simulate coin fetching
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-bold p-6 flex flex-col items-center">
      {/* HERO SECTION */}
      <div className="absolute top-6 right-6">
  <button
    onClick={() => {
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }}
    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-bold shadow-lg transition-all"
  >
    🚪 Logout
  </button>
</div>
      <div className="text-center max-w-3xl">
        <div className='flex flex-row'>
        <h1 className="text-5xl sm:text-6xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500">
          Test Your Brain. <br /> Win Digital currency
        </h1>
        <p className='mt-[50px] ml-[10px] text-[60px]'>💰</p>
        </div>
        <p className="mt-6 text-lg text-gray-200 font-semibold">
          Take AI-generated quizzes based on difficulty. Earn currency. Show off your skills.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/quiz">
              <Button className="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 hover:from-yellow-400 hover:to-rose-500 text-black px-8 py-4 text-xl font-extrabold rounded-full shadow-xl border-4 border-white/30 transition-all duration-500">
                🚀 Start Quiz
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/learnmore">
              <Button className="bg-gradient-to-bl from-amber-300 via-rose-400 to-indigo-500 hover:from-pink-600 hover:to-yellow-400 text-white px-8 py-4 text-xl font-extrabold rounded-full shadow-xl border-4 border-white/20 transition-all duration-500">
                📚 Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* MASCOT */}
      <div className="mt-12">
        <img  src={mascot} alt="Quiz Mascot" className="w-48 h-auto drop-shadow-lg" />
      </div>

      {/* COIN BALANCE SECTION */}
      {user && (
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-3xl p-6 text-center shadow-xl">
          <h2 className="text-2xl mb-2 flex items-center justify-center gap-2">
            <FaCoins className="text-yellow-300 text-3xl animate-bounce" /> Coin Balance:
          </h2>
          <p className="text-4xl font-black text-yellow-300">{currency} currency</p>
        </div>
      )}

      {/* LEARN MORE SECTION */}
      <div className="mt-20 max-w-2xl text-center text-gray-300">
        <h3 className="text-3xl font-extrabold text-white mb-4">How It Works?</h3>
        <p>
          Our AI generates unique quiz questions every time based on difficulty you choose. <br />
          Earn currency for each correct answer. Climb the leaderboard. Challenge friends soon!
        </p>
      </div>
    </div>
  );
}
