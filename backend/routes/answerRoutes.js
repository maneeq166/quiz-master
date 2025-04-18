import express from 'express';
import { authenticateUser } from '../middleware/authMiddleware.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/submit-answer', authenticateUser, async (req, res) => {
  const { userAnswer, correctAnswer } = req.body;

  try {
    if (!userAnswer || !correctAnswer) {
      return res.status(400).json({ message: 'Missing data.' });
    }

    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      user.coins += 10; // Reward 10 coins
      await user.save();
      return res.status(200).json({ message: 'Correct answer!', coins: user.coins });
    } else {
      return res.status(200).json({ message: 'Wrong answer.', coins: user.coins });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
});

export default router;
