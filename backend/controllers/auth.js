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
    const { firstName, lastName, email, password, accountType } = req.body;

    // 1) Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        status: 'fail',
        message: 'Email already in use'
      });
    }

    // 2) Create new user (assume password is hashed elsewhere or here)
    const newUser = await User.create({ 
      firstName,
      lastName,
      email,
      password,
      accountType
    });

    // 3) Generate token
    const token = signToken(newUser._id);

    // 4) Send response
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully!',
      token,
      data: {
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          accountType: newUser.accountType
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
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select('+password');
  
      if (!user){
        return res.status(401).json({
          status:'fail',
          message: "User does not exist"
        })
      } 
      if (!await user.correctPassword(password)) {
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
            email: user.email
          }
        }
      });
    } catch (err) {
      res.status(500).json({ 
        status: 'error',
        message:"can not find"
      });
    }
  };