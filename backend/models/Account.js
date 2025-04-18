const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'Account must belong to a user'] 
  },
  type: { 
    type: String, 
    enum: ['Savings', 'Current', 'Fixed Deposit'], 
    required: [true, 'Account type is required'],
    default: 'Savings'
  },
  accountNumber: { 
    type: String, 
    unique: true, 
    required: true 
  },
  balance: { 
    type: Number, 
    default: 0,
    min: [0, 'Balance cannot be negative']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Generate account number before saving
accountSchema.pre('save', function(next) {
  if (!this.accountNumber) {
    // Generate 10-digit account number
    this.accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }
  next();
});

module.exports = mongoose.model('Account', accountSchema);