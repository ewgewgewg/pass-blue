const Strategy = require('passport-local').Strategy;
const User = require('../models/user');

const SignupStrategy = new Strategy(function(username, password, done){
    const user = username;

    done('oops, something happened', null);

});

module.exports = SignupStrategy;