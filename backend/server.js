import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cron from "node-cron";

import authRoutes from "./routes/auth.js";
import questionRoutes from "./routes/questionRoutes.js";
import answerRoutes from "./routes/answerRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://quizora-dusky.vercel.app', // or your frontend production URL
  credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answer", answerRoutes);
app.use("/api/user", userRoutes);

cron.schedule('0 * * * *', () => {
  console.log('Running cron job at every hour at minute 0!');
  // Example: call a function to update database, clear cache, etc.
});

app.get('/', (req, res) => {
  res.status(200).send("Hi to cron job from server");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "quiz_master",
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
