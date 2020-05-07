const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/user.model');

const APP_SECRET = "myappsecret";

exports.loginUser = (req, res) => {
    console.log(`POST /accounts/login { email: ${req.body.email} }`);

    Users.findOne({ emailAddress: req.body.email }).then((user) => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, same) => {
                assert.equal(err, null);

                if (same) {
                    let token = jwt.sign({ data: user.email, expiresIn: '1h' }, APP_SECRET);
                    res.json({ success: true, token: token });
                }
                else {
                    res.json({ success: false, message: "Incorrect password" });
                }
                res.end();
            });
        }
        else {
            res.json({ success: false, message: "User not registered!" });
            res.end();
        }
    });
};