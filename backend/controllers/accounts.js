const Account = require('../models/Account');
const User = require('../models/User');

// Create new account
exports.createAccount = async (req, res) => {
  try {
    // 1) Get user from req (added by auth middleware)
    const userId = req.user.id;
    
    // 2) Create account
    const newAccount = await Account.create({ 
      user: userId,
      type: req.body.type || 'Savings'
    });
    
    // 3) Add account to user's accounts array
    await User.findByIdAndUpdate(
      userId,
      { $push: { accounts: newAccount._id } },
      { new: true }
    );

    // 4) Send response
    res.status(201).json({
      status: 'success',
      data: {
        account: newAccount
      }
    });
  } catch (err) {
    res.status(500).json({ 
      status: 'error',
      message: err.message 
    });
  }
};

// Get user accounts
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.user.id });
    
    res.status(200).json({
      status: 'success',
      results: accounts.length,
      data: {
        accounts
      }
    });
  } catch (err) {
    res.status(500).json({ 
      status: 'error',
      message: err.message 
    });
  }
};