const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models/user.model');

const APP_SECRET = "myappsecret";

exports.loginUser = async (req, res) => {
    console.log(`POST /accounts/login { email: ${req.body.emailAddress} }`);

    try {
        const user = await Users.findOne({ emailAddress: req.body.emailAddress });

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

exports.registerUser = async (req, res) => {
    console.log(`POST /accounts/register { email: ${req.body.emailAddress} }`);

    try {
        const user = await Users.findOne({ emailAddress: req.body.emailAddress });
        if (user) {
            res.json({ success: false, message: "This email already exists. Please use another email ID" });
            res.end();
        }
        else {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            let user = await Users.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                phoneNumber: req.body.phoneNumber,
                password: hashedPassword,
                role: "Player"
            });

            console.log("Created user: ", user);
            res.json(user);
            res.end();
        }
    } catch (err) {
        console.error(err);
    }
}