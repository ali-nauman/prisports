const express = require('express');
const bodyParser = require('body-parser');

const accountRouter = express.Router();

accountRouter.use(bodyParser.json());

accountRouter.post('/login', (req, res, next) => {
    console.log(`User with email ${req.body.email} tried to login!`);
    // To-Do: Auth :|
    res.json({ loggedIn: true });
});

module.exports = accountRouter;