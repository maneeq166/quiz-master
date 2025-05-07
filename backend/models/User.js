import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    currency: {
      type: Number,
      default: 120,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
