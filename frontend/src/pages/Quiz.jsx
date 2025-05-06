import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@mui/material';
import axios from 'axios';

export default function Quiz() {
  const [question, setQuestion] = useState('');
  const [coins, setCoins] = useState(0);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState('medium');

  const getQuestion = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/questions/get-question',
        { level },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setQuestion(res.data.question);
      setCoins(res.data.coins);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert(err.response?.data?.message || 'Something went wrong');
    }
    setLoading(false);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-neutral-900 text-white">
      <Navbar coins={coins} />

      <div className="p-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
          🎯 Your AI Quiz
        </h1>

        <div className="flex gap-4 mb-6">
          <button onClick={() => setLevel('easy')} className={`px-4 py-2 rounded-lg ${level === 'easy' ? 'bg-green-500' : 'bg-gray-700'} hover:bg-green-600 transition`}>Easy</button>
          <button onClick={() => setLevel('medium')} className={`px-4 py-2 rounded-lg ${level === 'medium' ? 'bg-yellow-500' : 'bg-gray-700'} hover:bg-yellow-600 transition`}>Medium</button>
          <button onClick={() => setLevel('hard')} className={`px-4 py-2 rounded-lg ${level === 'hard' ? 'bg-red-500' : 'bg-gray-700'} hover:bg-red-600 transition`}>Hard</button>
        </div>

        <button
          onClick={getQuestion}
          disabled={loading}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:scale-105 transition duration-300"
        >
          {loading ? 'Generating...' : '🎮 Get Question'}
        </button>

        <div className="mt-10 max-w-2xl bg-white/5 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">AI Generated Question:</h2>
          <p className="whitespace-pre-line text-lg">{question}</p>
        </div>
      </div>
    </div>
  );
}
