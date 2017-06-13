const express = require('express');
const router  = express.Router();

router.post('/registration', (req, res, next) => {
  res.send('Registration');
});

router.post('/authenticate', (req, res, next) => {
  res.send('Authenticate');
});

router.get('/profile', (req, res, next) => {
  res.send('Profile');
});

module.exports = router;