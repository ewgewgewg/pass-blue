const express = require('express');
const router = express.Router();
const passport = require('../passport');

/* GET users listing. */
router.post('/signup', passport.authenticate('local-signup',{
  successRedirect: '/',
  failureRedirect: '/home',
  session: false
}));

router.post('/signin', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
