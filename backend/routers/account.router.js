const express = require('express');
const passport = require('passport');

const accountController = require('../controllers/account.controller');

const accountRouter = express.Router();

accountRouter.post('/login', passport.authenticate('local'), accountController.logIn);
accountRouter.post('/register', accountController.register);
accountRouter.get('/logout', accountController.logOut);

module.exports = accountRouter;