const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models/user.model');

const APP_SECRET = "myappsecret";

exports.loginUser = async (req, res) => {
    console.log(`POST /accounts/login { email: ${req.body.email} }`);

    try {
        const user = await Users.findOne({ emailAddress: req.body.email });

        if (user) {
            const isPasswordSame = await bcrypt.compare(req.body.password, user.password);

            if (isPasswordSame) {
                let token = jwt.sign({ data: user.email, expiresIn: '1h' }, APP_SECRET);
                res.json({ success: true, token: token });
            }
            else {
                res.json({ success: false, message: "Incorrect password" });
            }
            res.end();
        }
        else {
            res.json({ success: false, message: "User not registered!" });
            res.end();
        }
    } catch (err) {
        console.error(err);
    }
}

exports.RegisterUser = async (req, res) => {
    console.log(`POST /accounts/login { email: ${req.body.email} }`);
    try {
        const user = await Users.findOne({ emailAddress: req.body.email });
        if (user) {
            res.json({ success: false, message: "This email already exists. Please use another email ID" });
            res.end();
        }
        else {
            Users.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.email,
                password: req.body.password,
                // phoneNumber: "123456789",
                role: "Player"
            }).then((user) => {
                console.log("Created user: ", user);
            })
        }
    } catch (err) {
        console.error(err);
    }
}