const express = require('express');
const { 
  createAccount, 
  getAccounts 
} = require('../controllers/accounts');
const auth = require('../middleware/auth');

const router = express.Router();

// Protect all routes after this middleware
router.use(auth);

router.post('/', createAccount);
router.get('/', getAccounts);

module.exports = router;