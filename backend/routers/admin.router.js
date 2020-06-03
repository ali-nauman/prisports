const express = require('express');

const authenticate = require('../authenticate');
const adminController = require('../controllers/admin.controller');

const adminRouter =  express.Router();

adminRouter.get('/players', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getPlayers);
adminRouter.get('/player/:playerId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getPlayer);
adminRouter.put('/updatePlayer/:playerId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.updatePlayer);
adminRouter.delete('/deletePlayer/:playerId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.deletePlayer);

adminRouter.get('/coaches', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getCoaches);

module.exports = adminRouter;