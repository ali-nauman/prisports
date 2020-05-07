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