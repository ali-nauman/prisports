var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var userSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "This field cannot be empty"] },
    lastName: { type: String, required: [true, "This field cannot be empty"] },
    emailAddress: { type: String, lowercase: true, unique: true, required: [true, "This field cannot be empty"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    password: { type: String, required: [true, "This field cannot be empty"] },
    // phoneNumber: { type: String, required: [true, "This field cannot be empty"] },
    role: { type: String, required: [true, "This field cannot be empty"] }
});

userSchema.plugin(uniqueValidator, { message: 'is already taken.' });
userSchema.plugin(AutoIncrement, { inc_field: 'id' });

let Users = mongoose.model('User', userSchema);

module.exports = Users;