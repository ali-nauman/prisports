const express = require('express');

const authenticate = require('../authenticate');
const adminController = require('../controllers/admin.controller');

const adminRouter =  express.Router();

adminRouter.get('/players', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getPlayers);
adminRouter.get('/coaches', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getCoaches);

module.exports = adminRouter;