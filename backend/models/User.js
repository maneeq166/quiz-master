import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    default: 30, // starts with 0 coins
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
