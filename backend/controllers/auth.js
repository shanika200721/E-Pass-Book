const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Helper function to create JWT token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  });
};

// Register new user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // 1) Check if user exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ 
        status: 'fail',
        message: 'Username or email already in use'
      });
    }

    // 2) Create new user
    const newUser = await User.create({ 
      username, 
      email, 
      password 
    });

    // 3) Generate token
    const token = signToken(newUser._id);

    // 4) Send response
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email
        }
      }
    });
  } catch (err) {
    res.status(500).json({ 
      status: 'error',
      message: err.message 
    });
  }
};

// Login user
exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username }).select('+password');
  
      if (!user || !(await user.correctPassword(password))) {
        return res.status(401).json({
          status: 'fail',
          message: 'Incorrect username or password'
        });
      }
  
      const token = signToken(user._id);
      res.status(200).json({
        status: 'success',
        token,
        data: {
          user: {
            id: user._id,
            username: user.username,
            email: user.email
          }
        }
      });
    } catch (err) {
      res.status(500).json({ 
        status: 'error',
        message: err.message 
      });
    }
  };