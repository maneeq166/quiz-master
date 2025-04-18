import express from 'express';
import openai from '../config/openai.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const questionRoutes = express.Router();

questionRoutes.post('/get-question', authenticateUser, async (req, res) => {
  const { level } = req.body;

  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Cost to generate a question (you can change this value)
    const COST = 5;

    if (user.coins < COST) {
      return res.status(403).json({ message: 'Not enough coins' });
    }

    // Deduct coins
    user.coins -= COST;
    await user.save();

    const difficultyPrompt = {
      easy: 'Create a very simple multiple-choice general knowledge question with 4 options and the correct answer labeled.',
      medium: 'Create a medium-level multiple-choice question related to science or history with 4 options and the correct answer labeled.',
      hard: 'Create a tough multiple-choice question with 4 options and the correct answer labeled clearly.',
    };

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: difficultyPrompt[level] || difficultyPrompt.medium,
        },
      ],
    });

    const aiQuestion = chatResponse.choices[0].message.content;
    res.status(200).json({ question: aiQuestion, coins: user.coins });

  } catch (err) {
    console.error('AI Question Error:', err.message);
    res.status(500).json({ message: 'Failed to generate question', error: err.message });
  }
});

export default questionRoutes;
