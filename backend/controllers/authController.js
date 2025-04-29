import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log('Signup request received:', req.body);
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log('User already exists');
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Password hashed successfully');
  
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
      console.log('User saved successfully');
  
      res.status(201).json({ message: "User created successfully", user: newUser });
  
    } catch (err) {
      console.error('Signup error:', err);
      res.status(500).json({ message: "Something went wrong", error: err.message });
    }
  };

  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log('Login request:', req.body);
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Generate JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });
  
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        }
      });
  
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ message: "Something went wrong", error: err.message });
    }
  };
  