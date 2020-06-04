const express = require('express');

const authenticate = require('../authenticate');
const adminController = require('../controllers/admin.controller');

const adminRouter = express.Router();

adminRouter.get('/coaches', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getCoaches);
adminRouter.post('/coaches', authenticate.verifyUser, authenticate.verifyAdmin, adminController.addCoach);
adminRouter.put('/coaches/:coachId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.updateCoach);
adminRouter.delete('/coaches/:coachId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.deleteCoach);

adminRouter.get('/players', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getPlayers);
// adminRouter.get('/players/:playerId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.getPlayer);
adminRouter.put('/players/:playerId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.updatePlayer);
adminRouter.delete('/players/:playerId', authenticate.verifyUser, authenticate.verifyAdmin, adminController.deletePlayer);

module.exports = adminRouter;