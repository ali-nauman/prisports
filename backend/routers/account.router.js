const express = require('express');
const passport = require('passport');

const accountController = require('../controllers/account.controller');

const accountRouter = express.Router();

accountRouter.post('/login', passport.authenticate('local'), accountController.loginUser);
accountRouter.post('/register', accountController.registerUser);

module.exports = accountRouter;