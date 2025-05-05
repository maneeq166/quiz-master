import express from 'express';
import genAI from '../config/gemini.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import User from '../models/User.js';

const questionRoutes = express.Router();

questionRoutes.post('/get-question', authenticateUser, async (req, res) => {
  const { level } = req.body;

  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const COST = 5;
    if (user.coins < COST) {
      return res.status(403).json({ message: 'Not enough coins' });
    }

    user.coins -= COST;
    await user.save();

    const difficultyPrompt = {
      easy: 'Create a very simple multiple-choice general knowledge question with 4 options and the correct answer labeled.',
      medium: 'Create a medium-level multiple-choice question related to science or history with 4 options and the correct answer labeled.',
      hard: 'Create a tough multiple-choice question with 4 options and the correct answer labeled clearly.',
    };

    const prompt = difficultyPrompt[level] || difficultyPrompt.medium;

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiQuestion = response.text();

    res.status(200).json({ question: aiQuestion, coins: user.coins });

  } catch (err) {
    console.error('Gemini API Error:', err.message);
    res.status(500).json({ message: 'Failed to generate question', error: err.message });
  }
});

export default questionRoutes;
