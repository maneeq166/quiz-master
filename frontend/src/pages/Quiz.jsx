// import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import { Button } from '@mui/material';
// import axios from 'axios';

// export default function Quiz() {
//   const [question, setQuestion] = useState('');
//   const [currency, setcurrency] = useState(120);
//   const [loading, setLoading] = useState(false);
//   const [level, setLevel] = useState('medium');

//   const getQuestion = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/questions/get-question',
//         { level },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );

//       setQuestion(res.data.question);
//       setcurrency(res.data.currency);
//     } catch (err) {
//       console.error(err.response?.data?.message || err.message);
//       alert(err.response?.data?.message || 'Something went wrong');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-neutral-900 text-white">
//       <Navbar currency={currency} />

//       <div className="p-6 flex flex-col items-center">
//         <div className='flex flex-row'>
//         <h1 className='text-[30px]'>🎯</h1>
//         <h1 className="text-4xl font-extrabold text-center ml-[10px] mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
//            Your AI Quiz
//         </h1>
//         </div>

//         <div className="flex gap-4 mb-6">
//           <button onClick={() => setLevel('easy')} className={`px-4 py-2 rounded-lg ${level === 'easy' ? 'bg-green-500' : 'bg-gray-700'} hover:bg-green-600 transition`}>Easy</button>
//           <button onClick={() => setLevel('medium')} className={`px-4 py-2 rounded-lg ${level === 'medium' ? 'bg-yellow-500' : 'bg-gray-700'} hover:bg-yellow-600 transition`}>Medium</button>
//           <button onClick={() => setLevel('hard')} className={`px-4 py-2 rounded-lg ${level === 'hard' ? 'bg-red-500' : 'bg-gray-700'} hover:bg-red-600 transition`}>Hard</button>
//         </div>

//         <button
//           onClick={getQuestion}
//           disabled={loading}
//           className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:scale-105 transition duration-300"
//         >
//           {loading ? 'Generating...' : '🎮 Get Question'}
//         </button>

//         <div className="mt-10 max-w-2xl bg-white/5 p-6 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-4 text-yellow-300">AI Generated Question:</h2>
//           <p className="whitespace-pre-line text-lg">{question}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import axios from "axios";

export default function Quiz() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currency, setCurrency] = useState(120);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState("medium");

  const getQuestion = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/questions/get-question",
        { level },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const fullText = res.data.question;
      const parts = fullText.split("\n").filter((line) => line.trim() !== "");

      const quesLine = parts.find((p) => p.includes("?")) || parts[0];
      const optionLines = parts.filter((p) => /^[A-Da-d][).]/.test(p.trim()));

      setQuestion(quesLine);
      setOptions(optionLines);
      setCurrency(res.data.currency);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  const submitAnswer = async () => {
    if (!selectedAnswer) {
      return alert("Please select an answer!");
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/answer/submit-answer",
        {
          question: question,
          userAnswer: selectedAnswer,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(res.data.message);
      setCurrency(res.data.currency);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert("Something went wrong while submitting your answer.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-neutral-900 text-white">
      <Navbar currency={currency} />

      <div className="p-6 flex flex-col items-center">
        <div className="flex flex-row">
          <h1 className="text-[30px]">🎯</h1>
          <h1 className="text-4xl font-extrabold text-center ml-[10px] mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
            Your AI Quiz
          </h1>
        </div>

        <div className="flex gap-4 mb-6">
          {["easy", "medium", "hard"].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`px-4 py-2 rounded-lg ${
                level === lvl ? "bg-green-500" : "bg-gray-700"
              } hover:bg-green-600 transition`}
            >
              {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={getQuestion}
          disabled={loading}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:scale-105 transition duration-300"
        >
          {loading ? "Generating..." : "🎮 Get Question"}
        </button>

        {question && (
          <div className="mt-10 max-w-2xl bg-white/5 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">
              AI Generated Question:
            </h2>
            <p className="text-lg mb-4">{question}</p>

            <RadioGroup
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            >
              {options.map((opt, idx) => (
                <FormControlLabel
                  key={idx}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              ))}
            </RadioGroup>

            <Button
              variant="contained"
              color="secondary"
              onClick={submitAnswer}
              className="mt-[20px]"
            >
              Submit Answer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
