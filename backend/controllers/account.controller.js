const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

const APP_SECRET = "myappsecret";
const EMAIL = "john.doe@gmail.com"
let HASHED_PASSWORD;

bcrypt.hash("john", 10, (err, hash) => {
    HASHED_PASSWORD = hash;
})

exports.loginUser = (req, res) => {
    console.log(`POST /accounts/login { email: ${req.body.email} }`);

    // To-Do: Search for email in the database
    if (req.body.email === EMAIL) {
        bcrypt.compare(req.body.password, HASHED_PASSWORD, (err, same) => {
            assert.equal(err, null);

            if (same) {
                let token = jwt.sign({ data: EMAIL, expiresIn: '1h' }, APP_SECRET);
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
};