const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const passport = require('passport');

const config = require('./config');
const User = require('./models/user.model');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secretKey
}

exports.local = passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = (user) => {
    return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
}

exports.jwtPassport = passport.use(new JwtStrategy(options, (payload, done) => {
    User.findOne({ _id: payload._id }, (err, user) => {
        if (err) { return done(err, false); }
        else if (user) { return done(null, user); }
        else { return done(null, false); }
    })
}));

exports.verifyAdmin = (req, res, next) => {
    if (req.user.role == "Admin") { next(); }
    else {
        let err = new Error("You are not authorized to perform this operation!");
        err.statusCode = 403;
        next(err);
    }
}

exports.verifyCoach = (req, res, next) => {
    if (req.user.role == "Coach") { next(); }
    else {
        let err = new Error("You are not authorized to perform this operation!");
        err.statusCode = 403;
        next(err);
    }
}

exports.verifyPlayer = (req, res, next) => {
    if (req.user.role == "Player") { next(); }
    else {
        let err = new Error("You are not authorized to perform this operation!");
        err.statusCode = 403;
        next(err);
    }
}

exports.verifyUser = passport.authenticate('jwt', { session: false });